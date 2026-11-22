# Prospect · agente de vendas da Prism

Agente do Claude Code que cria **posts, roteiros de vídeo, abordagens de WhatsApp/e-mail/LinkedIn,
follow-ups e respostas a objeções** para vender os produtos da Prism.

## Como usar
Abra este repositório no Claude Code e peça, por exemplo:

- `Use o agente vendas: 5 posts de Instagram do NFS-e Fácil para contadores`
- `@vendas abordagem de WhatsApp para um escritório de contabilidade de Uberlândia + follow-ups`
- `@vendas e-mail para o secretário de administração de uma prefeitura pequena apresentando o Abastece Fácil`
- `@vendas calendário de conteúdo de 30 dias para os dois produtos`
- `@vendas respostas para "o emissor do governo é de graça"`
- `@vendas abordagem de LinkedIn para o CISO de uma fintech apresentando o Desligamento Seguro`

## Estrutura
| Caminho | Para quê |
|---|---|
| `.claude/agents/vendas.md` | Instruções do agente (tom, regras de copy, LGPD, venda ao setor público, formatos) |
| `produtos/*.md` | Fichas dos produtos: a fonte da verdade do agente. Mantenha atualizadas |
| `produtos/_modelo.md` | Modelo para cadastrar um produto novo |
| `saidas/` | Onde o agente salva o que você pedir para guardar |
| `site/desligamento-seguro/` | Página de venda do Desligamento Seguro com calculadora de economia (preencha WhatsApp e e-mail no fim do arquivo) |

## Preencha antes de usar
Nas fichas, troque os marcadores `[LINK DO SITE]`, `[WHATSAPP]`, o preço do Abastece Fácil e, quando houver,
casos de clientes reais. O agente não inventa esses dados: ele deixa o marcador e avisa.

## Kit de vendas do Desligamento Seguro (`saidas/2026-11-22-desligamento-seguro-*`)
| Arquivo | Para quê |
|---|---|
| `estrategia-comercial` | ICP, preço em contrato anual, mercado, investibilidade, metas semanais, unit economics, parceiros |
| `playbook-de-vendas` | Abordagens, cadência, roteiro de descoberta, demonstração de 15 min, piloto pago, objeções |
| `proposta-comercial` | Modelo de proposta com cálculo de ROI |
| `termo-piloto-e-dpa` | Minuta do piloto pago e anexo LGPD (revisar com advogado) |
| `questionario-seguranca` | Respostas padrão ao questionário de segurança de fornecedor |
| `pitch` | Estrutura Sequoia e respostas no formato da Y Combinator |
| `posts` | 5 posts de LinkedIn para o lançamento |
