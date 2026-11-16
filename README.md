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

## Estrutura
| Caminho | Para quê |
|---|---|
| `.claude/agents/vendas.md` | Instruções do agente (tom, regras de copy, LGPD, venda ao setor público, formatos) |
| `produtos/*.md` | Fichas dos produtos: a fonte da verdade do agente. Mantenha atualizadas |
| `produtos/_modelo.md` | Modelo para cadastrar um produto novo |
| `saidas/` | Onde o agente salva o que você pedir para guardar |

## Preencha antes de usar
Nas fichas, troque os marcadores `[LINK DO SITE]`, `[WHATSAPP]`, o preço do Abastece Fácil e, quando houver,
casos de clientes reais. O agente não inventa esses dados: ele deixa o marcador e avisa.
