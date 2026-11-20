#!/usr/bin/env node
// Gera os vídeos de oração (9:16, 1080x1920) a partir de oracoes.json + config.json.
//
//   node gerar.cjs                 -> gera todos
//   node gerar.cjs oracao-da-manha -> gera só um (pelo slug)
//
// Com "voice_id" preenchido em config.json, narra com o ElevenLabs e sincroniza a legenda
// palavra por palavra. Sem ele, gera só com legenda e trilha.
// A chave da API vem da variável de ambiente ELEVENLABS_API_KEY (nunca escreva a chave em arquivo).
// Requisitos: Node 18+, ffmpeg, curl e Playwright com Chromium.

const fs = require('fs');
const path = require('path');
const { spawn, execFileSync } = require('child_process');
const { chromium } = require('playwright');

const DIR = __dirname;
const SAIDA = path.join(DIR, 'saida');
const cfg = JSON.parse(fs.readFileSync(path.join(DIR, 'config.json'), 'utf8'));
const oracoes = JSON.parse(fs.readFileSync(path.join(DIR, 'oracoes.json'), 'utf8'));
const FPS = cfg.fps || 30;
const INTRO = 1.4;     // segundos só com título antes da primeira frase
const OUTRO = 3.8;     // segundos de "Amém" + chamada no final
const temVoz = cfg.voice_id && !/COLE_AQUI/.test(cfg.voice_id);

// Acordes da trilha ambiente por tema (Hz)
const ACORDES = {
  manha: [110, 164.81, 220, 277.18, 329.63],
  familia: [98, 146.83, 196, 246.94, 293.66],
  noite: [87.31, 130.81, 174.61, 220, 261.63]
};

function palavrasComPosicao(texto) {
  const out = []; const re = /\S+/g; let m;
  while ((m = re.exec(texto))) out.push({ w: m[0], i0: m.index, i1: m.index + m[0].length - 1 });
  return out;
}

function narrar(o, textoCompleto, mp3) {
  const corpo = path.join(SAIDA, o.slug + '.req.json');
  fs.writeFileSync(corpo, JSON.stringify({
    text: textoCompleto,
    model_id: cfg.model_id,
    voice_settings: cfg.voice_settings
  }));
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(cfg.voice_id)}/with-timestamps?output_format=mp3_44100_128`;
  const resp = execFileSync('curl', ['-sS', '-X', 'POST', url,
    '-H', 'Content-Type: application/json',
    '-H', `xi-api-key: ${process.env.ELEVENLABS_API_KEY || 'dummy'}`,
    '--data-binary', '@' + corpo], { maxBuffer: 200 * 1024 * 1024 }).toString();
  fs.unlinkSync(corpo);
  let j;
  try { j = JSON.parse(resp); } catch { throw new Error('Resposta inesperada do ElevenLabs: ' + resp.slice(0, 300)); }
  if (!j.audio_base64) throw new Error('ElevenLabs recusou: ' + JSON.stringify(j.detail || j).slice(0, 400));
  fs.writeFileSync(mp3, Buffer.from(j.audio_base64, 'base64'));
  return j.alignment; // { characters, character_start_times_seconds, character_end_times_seconds }
}

function montarDados(o) {
  const textoCompleto = o.frases.join(' ') + ' Amém.';
  const pals = palavrasComPosicao(textoCompleto);
  const mp3 = path.join(SAIDA, o.slug + '.voz.mp3');

  if (temVoz) {
    const al = narrar(o, textoCompleto, mp3);
    const ini = al.character_start_times_seconds, fim = al.character_end_times_seconds;
    pals.forEach(p => { p.s = INTRO + ini[p.i0]; p.e = INTRO + fim[p.i1]; });
  } else {
    let t = INTRO;
    let k = 0;
    o.frases.forEach(f => {
      const n = f.split(/\s+/).length;
      for (let j = 0; j < n; j++, k++) {
        const dur = 0.24 + 0.045 * pals[k].w.length;
        pals[k].s = t; pals[k].e = t + dur; t += dur + 0.04;
      }
      t += 0.55;
    });
    pals[k].s = t; pals[k].e = t + 0.6; // "Amém."
  }

  let k = 0;
  const frases = o.frases.map(f => {
    const n = f.split(/\s+/).length;
    const words = pals.slice(k, k + n).map(p => ({ w: p.w, s: p.s, e: p.e }));
    k += n;
    return { text: f, start: words[0].s, end: words[words.length - 1].e, words };
  });
  const amem = pals[pals.length - 1];
  return {
    dados: { titulo: o.titulo, tema: o.tema, frases, amemStart: amem.s, total: amem.e + OUTRO },
    mp3: temVoz ? mp3 : null
  };
}

function ffmpeg(args, opts = {}) {
  return new Promise((res, rej) => {
    const p = spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: [opts.stdin ? 'pipe' : 'ignore', 'inherit', 'inherit'] });
    p.on('error', rej);
    p.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg saiu com código ' + c))));
    if (opts.onStart) opts.onStart(p);
  });
}

async function renderizarVideo(browser, dados, destino) {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.addInitScript(d => { window.MODO_RENDER = true; window.DATA = d; }, dados);
  await page.goto('file://' + path.join(DIR, 'template.html'));
  await page.evaluate(async () => {
    await Promise.all([
      document.fonts.load('600 82px "Cormorant Garamond"'),
      document.fonts.load('italic 500 190px "Cormorant Garamond"'),
      document.fonts.load('600 40px Cinzel')
    ]).catch(() => {});
    await document.fonts.ready;
  });

  const total = Math.ceil(dados.total * FPS);
  let proc;
  const fim = ffmpeg(['-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '19', '-preset', 'medium', destino],
    { stdin: true, onStart: p => (proc = p) });
  for (let i = 0; i < total; i++) {
    const url = await page.evaluate(t => window.frame(t, 0.93), i / FPS);
    const buf = Buffer.from(url.slice(url.indexOf(',') + 1), 'base64');
    if (!proc.stdin.write(buf)) await new Promise(r => proc.stdin.once('drain', r));
    if (i % (FPS * 5) === 0) process.stdout.write(`\r  quadros ${i}/${total}`);
  }
  proc.stdin.end();
  await fim;
  process.stdout.write(`\r  quadros ${total}/${total}\n`);
  await page.close();
}

async function montarAudioEFinal(o, dados, mp3, videoMudo, destino) {
  const dur = dados.total.toFixed(2);
  const notas = ACORDES[o.tema] || ACORDES.manha;
  const expr = notas.map((f, i) =>
    `0.18*sin(2*PI*${f}*t)*(0.55+0.45*sin(2*PI*${(0.05 + i * 0.023).toFixed(3)}*t+${i}))`).join('+');
  // sem narração a trilha é o único som, então fica bem mais alta
  const vol = (cfg.musica_volume ?? 0.35) * (mp3 ? 1 : 2.8);
  const musica = `aevalsrc='${expr}':s=44100:d=${dur},lowpass=f=1400,aecho=0.8:0.85:120|260:0.35|0.25,` +
    `volume=${vol},afade=t=in:d=2,afade=t=out:st=${(dados.total - 3).toFixed(2)}:d=3`;

  const args = ['-i', videoMudo, '-f', 'lavfi', '-i', musica];
  let filtro, mapa;
  if (mp3) {
    args.push('-i', mp3);
    const atraso = Math.round(INTRO * 1000);
    filtro = `[2:a]adelay=${atraso}|${atraso},aformat=channel_layouts=stereo[v];[1:a]aformat=channel_layouts=stereo[m];` +
      `[v][m]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.95[a]`;
    mapa = '[a]';
  } else {
    filtro = '[1:a]aformat=channel_layouts=stereo[a]';
    mapa = '[a]';
  }
  args.push('-filter_complex', filtro, '-map', '0:v', '-map', mapa,
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-t', dur, '-movflags', '+faststart', destino);
  await ffmpeg(args);
}

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const filtro = process.argv[2];
  const lista = oracoes.filter(o => !filtro || o.slug === filtro);
  if (!lista.length) throw new Error('Nenhuma oração com o slug ' + filtro);
  console.log(temVoz ? `Narração: ElevenLabs (voz ${cfg.voice_id})` : 'Sem voice_id: gerando só com legenda e trilha.');

  const browser = await chromium.launch();
  try {
    for (const o of lista) {
      console.log(`\n▶ ${o.titulo}`);
      const { dados, mp3 } = montarDados(o);
      fs.writeFileSync(path.join(SAIDA, o.slug + '.tempos.json'), JSON.stringify(dados, null, 1));
      const mudo = path.join(SAIDA, o.slug + '.mudo.mp4');
      await renderizarVideo(browser, dados, mudo);
      const final = path.join(SAIDA, o.slug + '.mp4');
      await montarAudioEFinal(o, dados, mp3, mudo, final);
      fs.unlinkSync(mudo);
      console.log(`  ✔ ${final} (${dados.total.toFixed(1)} s)`);
    }
  } finally {
    await browser.close();
  }
})().catch(e => { console.error('\nErro:', e.message); process.exit(1); });
