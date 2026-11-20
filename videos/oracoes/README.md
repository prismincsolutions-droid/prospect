# Vídeos de oração para Shorts (estética de vitral)

Gera vídeos verticais (1080x1920, 30 fps) com visual de vitral de igreja, legenda sincronizada palavra por palavra, trilha ambiente e narração do ElevenLabs.

| Arquivo | Para quê |
|---|---|
| `oracoes.json` | Textos das orações (título, tema e frases). Edite ou acrescente orações aqui |
| `config.json` | **Onde vai o código da voz do ElevenLabs** (`voice_id`) e o volume da trilha |
| `template.html` | A animação do vitral |
| `gerar.cjs` | Gera os MP4 em `saida/` |

Temas disponíveis: `manha` (dourado, sol com cruz), `familia` (vermelho, Sagrado Coração), `noite` (azul mariano, lua e estrela).

## Protocolo: pedir os vídeos narrados ao Claude

1. No ElevenLabs, abra **Voices → My Voices** e adicione a voz que quer usar. No plano gratuito, a API só aceita vozes que estão em "My Voices".
2. Clique nos três pontinhos da voz → **Copy voice ID**. É um código parecido com `pNInz6obpgDQGcFmaJgB`.
3. Abra uma sessão do Claude Code neste repositório e mande:

```
Gere os vídeos de oração em videos/oracoes com a voz do ElevenLabs: COLE_O_VOICE_ID_AQUI
```

O Claude coloca o código em `config.json`, roda `node gerar.cjs` e te devolve os 3 MP4 narrados.

## Rodar no seu computador

Requisitos: Node 18+, ffmpeg, curl e Playwright (`npm i playwright && npx playwright install chromium`).

```bash
export ELEVENLABS_API_KEY="sua-chave"   # nunca grave a chave em arquivo
node gerar.cjs                          # todos
node gerar.cjs oracao-pela-familia      # só um
```

Sem `voice_id` preenchido, os vídeos saem só com legenda e trilha.
