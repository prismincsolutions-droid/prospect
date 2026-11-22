# Desligamento Seguro · Prism

## Em uma frase
Quando alguém sai da empresa, o Desligamento Seguro **retira todos os acessos em minutos** (e-mail, Microsoft 365,
Slack, CRM e outros sistemas) e **gera a prova para a auditoria**, no lugar do processo feito à mão com chamados e planilhas.

## Por que agora (gatilho real)
- **Instituições reguladas pelo Banco Central**: a Resolução CMN nº 4.893/2021 (política de segurança cibernética) foi
  alterada pela **Resolução CMN nº 5.274, de 18/12/2025**, que reforçou requisitos como **controle de acesso**, com prazo
  de adequação até **01/03/2026** para as instituições em funcionamento. Fiscalização e auditoria interna pedem evidência.
  (Confirmar o texto vigente em normativos.bcb.gov.br antes de citar artigo específico.)
- **ISO/IEC 27001:2022** (Anexo A): 5.18 direitos de acesso, 6.5 responsabilidades após o desligamento, 5.11 devolução
  de ativos, 8.2 acessos privilegiados. **SOC 2** (CC6.2/CC6.3) e **PCI DSS v4.0** (req. 8.2.5: acesso de desligado
  revogado imediatamente) cobram o mesmo.
- **LGPD** (art. 46): a empresa precisa de medidas de segurança para evitar acesso não autorizado a dados pessoais.
  Multa de até 2% do faturamento no Brasil, limitada a R$ 50 milhões por infração (art. 52).
- **Clientes grandes** mandam questionário de segurança de fornecedor com a pergunta "como vocês garantem que
  ex-funcionários perdem o acesso?". Sem resposta boa, o contrato não sai.

## Públicos (personas): dor e o que vende para cada um
1. **Gestor de TI / Segurança (CISO, coordenador de infraestrutura)**: quem compra e opera.
   - Dor: lembrar de 8 a 15 sistemas por desligamento; sempre fica algo para trás; montar evidência para auditor leva dias.
   - O que vende: desligamento com um clique, fila que tenta de novo sozinha, **comprovante pronto**, mapa de
     **contas sem dono** e **ex-funcionário com acesso**, permissões mínimas, MFA obrigatório.
2. **Diretoria / CFO / sócio-gestor**: quem aprova o valor.
   - Dor: risco de vazamento ou fraude por ex-funcionário, multa, perder cliente grande na due diligence.
   - O que vende: risco reduzido com prova, ROI (horas de TI + preparação de auditoria), relatório para o conselho.
3. **RH / Departamento Pessoal**: influenciador e usuário.
   - Dor: avisa a TI por e-mail e não sabe se foi feito; cobra devolução de notebook à mão.
   - O que vende: botão de desligamento (ou aviso automático da folha), checklist de devolução com nome e data.
4. **Compliance / Auditoria interna**: usuário leitor.
   - O que vende: papel de auditor (somente leitura), CSV do período, trilha que não pode ser alterada.

## Melhores compradores (ICP)
| Perfil | Gatilho de compra | Quem decide |
|---|---|---|
| Fintechs, IPs, SCDs, cooperativas de crédito (50–500 pessoas) | Fiscalização do BC, auditoria interna, Res. CMN 5.274 | CISO / diretor de TI |
| Empresas se preparando para ISO 27001 ou SOC 2 | Auditoria marcada | Segurança / diretoria |
| Call centers, BPOs, terceirização de serviços | Alta rotatividade (dezenas de desligamentos por mês) | Operações / TI |
| Escritórios médios de advocacia e contabilidade | Dado sigiloso de clientes, exigência de cliente grande | Sócio-gestor / TI |
| SaaS B2B que vende para bancos | Questionário de segurança do cliente | CTO |

**Momento certo:** auditoria chegando, incidente com ex-funcionário, cliente grande pedindo evidência, demissão em massa.

## Recursos que podem ser citados (todos existem no MVP)
Conectores Google Workspace, Microsoft 365, Slack (planos Business+ e Enterprise) e qualquer sistema com SCIM 2.0 ·
mapa de acessos com alertas de ex-funcionário com acesso, conta sem dono e contas administrativas ·
desligamento com um clique ou **agendado** (ex.: sexta às 18h) · encerrar sessões, suspender conta, transferir arquivos do
Google Drive para o gestor · fila que **tenta de novo sozinha** quando o fornecedor está instável · **checklist** de
devolução de equipamentos e troca de senhas compartilhadas, com nome e horário de quem confirmou · **comprovante por
desligamento** (PDF) com selo SHA-256 · **relatório do período** em CSV · aviso automático do RH/folha (webhook) ·
**trilha de auditoria que não pode ser alterada** · MFA obrigatório · papéis admin / RH / auditor · credenciais cifradas ·
demonstração com dados fictícios.

## Preço / planos (contrato anual)
| Plano | Inclui | Mensal | Contrato anual |
|---|---|---|---|
| **Essencial** | até 100 colaboradores, até 5 sistemas, comprovantes e relatórios | R$ 990 | **R$ 11.880** |
| **Profissional** | até 300 colaboradores, sistemas ilimitados, gatilho da folha, revisão trimestral (quando lançada) | R$ 1.990 | **R$ 23.880** |
| **Corporativo** | acima de 300, sistemas próprios, instância dedicada, suporte prioritário | sob consulta | a partir de **R$ 36 mil** |
| **Implantação** (única) | configuração dos conectores, importação de colaboradores, treinamento, primeiro mapa de riscos | R$ 3 mil a R$ 8 mil | |
| **Piloto pago** (30 dias) | 3 sistemas, até 10 desligamentos reais, relatório de riscos | **R$ 2.500**, abatidos da implantação se fechar | |

- Venda sempre o **contrato anual** (todo plano fica acima de R$ 10 mil por ano). Pagamento anual à vista: até 10% de desconto.
- Primeiro ano do Essencial com implantação: **a partir de R$ 14.880**.
- Não existe plano grátis. A **demonstração** com dados fictícios é o CTA ("ver em 15 minutos").

## Objeções comuns
- "A TI faz isso sozinha." → Faz, mas prova? Quanto tempo leva para juntar a evidência de 6 meses de desligamentos
  para o auditor? Quantas contas sem dono vocês têm hoje? (oferecer o **mapa de riscos** no piloto).
- "Já temos Okta / Entra ID / JumpCloud." → Ótimo, o SSO cobre o que está nele. Quase sempre sobram sistemas fora do
  SSO, contas locais, senhas compartilhadas e equipamentos. E o comprovante por desligamento continua manual.
- "É perigoso dar acesso de administrador a um fornecedor." → Correto, por isso: permissões mínimas documentadas
  (só listar, suspender e encerrar sessão), credencial cifrada, MFA obrigatório, trilha que não pode ser alterada.
  Entregamos o guia de permissões antes de qualquer conexão.
- "Temos poucos desligamentos." → O valor está na prova e no mapa: um único ex-funcionário com acesso ao CRM ou ao
  banco já paga anos de assinatura.
- "Está caro." → Comparar com: horas de TI por desligamento × volume + dias de preparação de auditoria + risco evitado
  (ver calculadora na proposta).

## Não prometer
"100% seguro", "zero risco", "aprovado pelo Banco Central", "certificado ISO 27001" (a Prism ainda **não** é
certificada), "substitui o Okta/Entra", conectores que não existem (ex.: folhas brasileiras nativas, AWS, Azure,
Salesforce nativo: hoje só via SCIM, quando o sistema oferece). Slack automático só nos planos Business+ e Enterprise.
Números de clientes e casos só quando existirem.

## Links e contatos
- Site: [LINK DO SITE] (página pronta em `site/desligamento-seguro/index.html`)
- WhatsApp comercial: [WHATSAPP]
- E-mail comercial: [E-MAIL]
- Caso de cliente real: [PREENCHER QUANDO HOUVER]
