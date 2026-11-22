# Desligamento Seguro · Playbook de vendas

Do primeiro contato ao contrato: abordagens, descoberta, demonstração, piloto, objeções e fechamento.

---

## 1. Abordagem fria (motivo + relevância + pergunta)

### WhatsApp: gestor de TI de fintech (até ~400 caracteres)
> Oi, [NOME], tudo bem? Sou [SEU NOME], da Prism. Vi que a [EMPRESA] cresceu bastante este ano e, com a alteração da
> Res. CMN 4.893 (controle de acesso), muita fintech está tendo que provar que ex-funcionários perdem o acesso na hora.
> Hoje vocês conseguem tirar esse relatório em minutos ou ainda montam na mão?
> (Se não fizer sentido, é só me avisar que não mando mais.)

### WhatsApp: call center / BPO
> Oi, [NOME]! Aqui é [SEU NOME], da Prism. Operação com muita rotatividade costuma ter um problema chato: atendente sai e
> o acesso ao sistema/CRM fica ativo por dias. Quantos desligamentos vocês fazem por mês na [EMPRESA]? Tenho uma forma de
> derrubar todos os acessos em minutos e deixar a prova pronta. Posso te mostrar em 15 min?

### WhatsApp: escritório de advocacia/contabilidade
> Oi, Dr(a). [NOME]. Sou [SEU NOME], da Prism. Escritórios que guardam dado sigiloso de cliente estão recebendo
> questionário de segurança dos clientes grandes, com a pergunta "como garantem que ex-funcionário perde o acesso?".
> Hoje, quando alguém sai do escritório, quem cuida disso e como fica registrado?

### E-mail: CISO / diretor de TI
**Assunto:** Prova de desligamento para a próxima auditoria da [EMPRESA]

> Olá, [NOME],
>
> Em auditoria de ISO 27001, SOC 2 ou do Banco Central, uma das amostras mais comuns é: "pegue 10 desligamentos do
> período e prove quando cada acesso foi retirado". Montar essa evidência costuma levar dias.
>
> O Desligamento Seguro conecta Google/Microsoft 365, Slack e sistemas com SCIM, retira tudo em minutos quando o RH
> avisa e gera um comprovante por desligamento, com trilha que não pode ser alterada. No primeiro contato ele também
> mostra **contas de ex-funcionários que ainda estão ativas** e **contas sem dono**.
>
> Faz sentido uma demonstração de 15 minutos na [DIA] ou [DIA]?
>
> [ASSINATURA] · Se não for com você, pode me indicar a pessoa certa?

### LinkedIn (convite com nota, até 300 caracteres)
> [NOME], trabalho com automação de desligamento de acessos e prova para auditoria (ISO 27001/Bacen). Tenho conversado
> com gestores de TI de [SETOR] sobre como lidam com contas de ex-funcionários. Topa trocar uma ideia?

### Cadência de follow-up
| Dia | Canal | Mensagem |
|---|---|---|
| D0 | WhatsApp/e-mail | Abordagem acima |
| D2 | LinkedIn/WhatsApp | Conteúdo útil sem pedir nada: "Checklist de 12 itens para desligamento seguro" (post ou PDF) |
| D5 | E-mail | Prova: "Na demonstração com dados fictícios, em 3 sistemas achamos 1 ex-funcionário ativo e 2 contas sem dono. Na média das empresas que analisamos: [PREENCHER QUANDO HOUVER DADOS REAIS]" |
| D9 | WhatsApp | Pergunta direta: "Vale 15 minutos esta semana ou prefere que eu volte depois da auditoria?" |
| D14 | E-mail | Encerramento: "Vou encerrar por aqui para não lotar sua caixa. Se o tema voltar, é só responder este e-mail." |

---

## 2. Reunião de descoberta (30 min)

**Objetivo:** confirmar dor, medir em números, achar quem decide e o gatilho de prazo. Fale 30%, escute 70%.

### Perguntas (na ordem)
1. Me conta como é hoje, passo a passo, quando alguém sai. Quem avisa quem? Por qual canal?
2. Quantos sistemas a TI precisa mexer? Algum fica fora do Google/Microsoft (CRM, ERP, banco, sistemas próprios)?
3. Quantos desligamentos por mês? E quanto tempo cada um leva, somando todo mundo?
4. Já aconteceu de alguém sair e continuar com acesso? Como descobriram?
5. Existem senhas compartilhadas (redes sociais, banco, Wi-Fi, cofre)? Quem troca quando alguém sai?
6. Vocês passam por auditoria (ISO 27001, SOC 2, Bacen, PCI, cliente)? Quando é a próxima? Como montam a evidência hoje?
7. Se pudesse resolver só uma parte disso, qual seria?
8. Quanto vale resolver? O que acontece se nada mudar nos próximos 6 meses?
9. Além de você, quem participa da decisão? Como funciona uma compra de software de R$ 15 a 25 mil por ano aí?
10. Que sistemas de identidade vocês já têm (Google, Entra ID, Okta, JumpCloud)?

### Qualificação rápida (avance se 4 de 5 forem "sim")
- [ ] 50+ colaboradores **ou** dado regulado/sigiloso
- [ ] Usa Google Workspace ou Microsoft 365
- [ ] Tem auditoria, cliente exigente ou incidente recente (gatilho)
- [ ] Decisor identificado e acessível
- [ ] Orçamento possível na faixa de R$ 12 a 25 mil/ano

### Encerramento da descoberta
> "Pelo que você contou, são [X] desligamentos por mês, [Y] horas cada e a auditoria é em [MÊS]. Proponho um piloto de
> 30 dias: conectamos [SISTEMAS], fazemos o mapa de riscos e vocês usam nos desligamentos reais. Custa R$ 2.500 e
> é abatido da implantação se seguirem. Faz sentido eu mandar a proposta até [DIA]?"

---

## 3. Roteiro de demonstração (15 min, usando "Carregar demonstração")

| Min | Tela | O que dizer |
|---|---|---|
| 0–2 | **Painel** | "Esta é uma empresa fictícia com 3 sistemas. Veja: **1 ex-funcionário ainda com acesso** e **2 contas sem dono**. Na sua empresa, sabe esses números hoje?" |
| 2–5 | **Mapa de acessos** | Mostrar o Marcos Vieira (saiu em julho e continua com acesso ao CRM, com login recente). "É isso que vira incidente." Mostrar "vendas.temp" (admin sem dono). |
| 5–9 | **Desligamentos > Novo** | Desligar a Gabriela. "O RH clica aqui, ou a folha avisa sozinha." Mostrar 7 ações automáticas em segundos, Drive transferido para a gestora. |
| 9–11 | **Checklist** | Confirmar notebook e crachá. "Cada item fica com nome e horário." |
| 11–13 | **Comprovante** | Abrir o PDF. "Isso é o que o auditor pede. Selo, trilha, horários." |
| 13–14 | **Auditoria** | "Trilha íntegra: ninguém consegue alterar, nem nós." Baixar CSV do período. |
| 14–15 | **Fechamento** | "Num piloto, em 1 semana eu te mostro esses números da sua empresa real. Começamos por quais sistemas?" |

**Antes da demo:** crie uma conta nova só para a reunião (dados limpos) e teste o MFA no celular.
**Nunca** conecte sistema real do prospect durante a demonstração.

---

## 4. Piloto pago (30 dias)

| Semana | Entrega | Responsável |
|---|---|---|
| 0 | Assinatura do termo de piloto + guia de permissões enviado | Prism |
| 1 | Conectores (até 3), importação de colaboradores, **relatório de riscos inicial** (ex-funcionários ativos, contas sem dono, admins) | Prism + TI do cliente |
| 2–3 | Desligamentos reais pela plataforma (até 10); checklist ajustado | RH + TI |
| 4 | Reunião de resultado: tempo médio, riscos corrigidos, comprovantes gerados → **proposta anual** | Prism + decisor |

**Critérios de sucesso combinados no início** (escreva no termo):
1. Desligamento completo em menos de 5 minutos nos sistemas conectados.
2. 100% dos desligamentos do período com comprovante.
3. Riscos do mapa inicial tratados.

---

## 5. Objeções (objeção → por que pensam → resposta → pergunta)

| Objeção | Por que pensam | Resposta curta | Pergunta para retomar |
|---|---|---|---|
| "A TI já faz isso." | Bloquear o e-mail parece suficiente | Faz o bloqueio; a prova e os sistemas fora do e-mail é que ficam para trás | "Se o auditor pedir 10 desligamentos do semestre agora, quanto tempo levam?" |
| "Temos Okta/Entra/JumpCloud." | SSO = controle total | O SSO cobre o que está nele; sobram contas locais, senhas compartilhadas, equipamentos e o comprovante | "Quantos sistemas estão fora do SSO hoje?" |
| "Não dou admin para fornecedor." | Risco de terceiro | Concordo. Permissões mínimas (listar, suspender, encerrar sessão), MFA obrigatório, credencial cifrada, trilha imutável; o guia vem antes | "Posso mandar o guia de permissões para o seu time avaliar?" |
| "Poucos desligamentos." | Volume baixo = baixo valor | Um ex-funcionário com acesso ao CRM/banco custa mais que anos de assinatura; e o mapa encontra contas sem dono | "Quando foi a última revisão de quem tem acesso a quê?" |
| "Está caro." | Comparam com ferramenta de chamado | Some horas de TI + preparação de auditoria + risco (ver calculadora) | "Quanto custou a última auditoria em horas da equipe?" |
| "Agora não é prioridade." | Sem gatilho | Respeitar; agendar para 60 dias antes da auditoria | "Quando é a próxima auditoria? Posso voltar 2 meses antes?" |
| "Vocês são pequenos/novos." | Risco de fornecedor | Questionário de segurança respondido, contrato com DPA, exportação dos dados a qualquer momento | "O que o seu jurídico/compliance precisa ver de um fornecedor?" |

---

## 6. Fechamento
- Mande a proposta em até 24 h após a descoberta ou o fim do piloto (modelo em `2026-11-22-desligamento-seguro-proposta-comercial.md`).
- Sempre com **data de início**, **critério de sucesso** e **próximo passo com data**.
- Desconto só em troca de algo: pagamento anual à vista (até 10%), case público, indicação de 2 empresas.

**Para medir:** respostas às abordagens (meta 15%), reuniões marcadas por semana (meta 3), pilotos por mês (meta 2),
conversão piloto → anual (meta 50%).

**Preencher:** [SEU NOME], [ASSINATURA], [LINK DO SITE], [WHATSAPP], dados reais de casos quando houver.
