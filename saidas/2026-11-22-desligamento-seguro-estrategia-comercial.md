# Desligamento Seguro · Estratégia comercial e investibilidade

> Documento interno da Prism. Números marcados com **[CONFIRMAR]** são hipóteses a validar nas entrevistas
> ou em fonte oficial antes de usar em pitch.

## 1. Frase-resumo
Para **empresas de 50 a 500 pessoas que lidam com dados sensíveis**, que **perdem dias de TI e correm risco com
acessos de ex-funcionários**, o **Desligamento Seguro** é uma **plataforma de desligamento de acessos** que
**retira tudo em minutos e entrega a prova para a auditoria**, diferente do **processo manual por chamados e planilhas**.

## 2. Ajustes em relação ao plano original
| Plano original | Ajuste | Por quê |
|---|---|---|
| R$ 990 a 1.990/mês | **Mesmo preço, vendido como contrato anual** (R$ 11.880 a 23.880/ano) | Todo contrato passa de R$ 10 mil; reduz churn e financia o crescimento |
| Piloto pago | **R$ 2.500 por 30 dias**, abatido da implantação | Filtra curioso, paga o esforço de conectar e encurta o ciclo |
| Vender pelo bloqueio | **Vender pela prova e pelo mapa de riscos** | "A TI faz sozinha" é a objeção nº 1; ninguém faz a prova sozinho |
| Next.js + FastAPI | **FastAPI + HTML** (mesma base do NFS-e Fácil) | 1 dev entrega e mantém; migração para Postgres planejada |
| Slack para todos | **Slack automático só em Business+/Enterprise** | Exigência do Slack para a API SCIM; nos demais, item do checklist |

## 3. Tamanho de mercado (de baixo para cima)
| Camada | Conta | Valor anual |
|---|---|---|
| **SOM (24 meses)** | 60 clientes × ACV médio de R$ 16 mil | **≈ R$ 1 milhão/ano** |
| **SAM (Brasil, ICP prioritário)** | fintechs (1.728, Distrito 2025) + cooperativas de crédito, BPOs/call centers e escritórios médios **[CONFIRMAR volume]** ≈ 8 mil empresas × R$ 16 mil | **≈ R$ 130 milhões/ano** |
| **TAM (Brasil)** | empresas formais com 50 a 499 empregados **[CONFIRMAR no CEMPRE/IBGE ou RAIS]**: hipótese de 40 a 60 mil × R$ 16 mil | **≈ R$ 640 a 960 milhões/ano** |

Leitura franca: o SAM só no Brasil sustenta uma boa empresa, mas não uma empresa de venture sozinho. A tese de
venture depende de (a) expandir para **ciclo de vida completo de acessos** (admissão, revisão trimestral, mudança
de cargo), o que multiplica o ACV por 2 a 3, e (b) **América Latina** (mesmos problemas, mesma língua no México e
na Colômbia com tradução, concorrentes caros em dólar).

## 4. Por que agora
1. **Regulação apertando**: Res. CMN 5.274/2025 alterou a 4.893 (controle de acesso, gestão de backup,
   inteligência cibernética), com adequação até 01/03/2026. Auditorias de 2026 e 2027 vão cobrar evidência.
2. **Explosão de SaaS**: uma empresa média usa dezenas de sistemas, muitos fora do SSO.
3. **APIs maduras**: Google, Microsoft Graph e SCIM tornam a automação confiável sem RPA.
4. **Concorrentes caros e em inglês**: Okta, JumpCloud, BetterCloud, Torii, 1Password SaaS Manager e Nudge cobram em
   dólar, por usuário, e não entregam evidência no formato que o auditor brasileiro pede. Concorrente nacional
   dedicado não foi encontrado na pesquisa inicial **[CONFIRMAR com busca no Distrito/Crunchbase e nas entrevistas]**.

## 5. Defensabilidade (o que construir de propósito)
- **Formato de evidência aceito por auditores brasileiros** (ISO 27001, Bacen, PCI): validar com 3 auditores e virar padrão.
- **Conectores com sistemas brasileiros** (folhas como Senior, TOTVS, Sólides, Gupy, Convenia; ERPs; bancos) **[CONFIRMAR quais têm API]**.
- **Dados do mapa de acessos** ao longo do tempo: benchmark de risco por setor ("sua empresa tem 3x mais contas sem dono que a média").
- **Custo de troca**: trilha histórica de auditoria fica na plataforma.
- **Certificação ISO 27001 da Prism** (médio prazo): vira barreira para quem vende a banco.

## 6. Nota de investibilidade: **5,5 / 10** (hoje)
| Critério | Nota | Comentário |
|---|---|---|
| Dor urgente | 7 | Real e cobrada por norma, mas urgência aparece em gatilhos (auditoria/incidente) |
| Mercado | 5 | Bom no Brasil, venture só com expansão de escopo e LatAm |
| Produto | 6 | MVP funcional e seguro; faltam integrações brasileiras e revisão trimestral |
| Tração | 2 | Zero clientes: é o que mais pesa |
| Defensabilidade | 5 | Baixa hoje; cresce com formato de evidência + conectores locais |
| Time | [AVALIAR] | Ter alguém com histórico em segurança ou em venda para bancos muda essa nota |

**O que mais sobe a nota:** 5 clientes pagantes em 90 dias, sendo 2 instituições reguladas pelo BC; uma carta de um
auditor dizendo que o comprovante atende; crescimento semanal de receita de 5% a 7%.

## 7. Metas (pensando em semanas, como na YC)
| Semana | Meta | Métrica |
|---|---|---|
| 1–2 | 10 entrevistas, 2 pilotos combinados | entrevistas feitas, pilotos assinados |
| 3–4 | 2 pilotos pagos rodando | R$ 5 mil em pilotos |
| 5–8 | Converter 1 piloto + abrir mais 3 | primeiro contrato anual |
| 9–12 | 3 contratos anuais | **ARR ≥ R$ 40 mil** |
| Mês 6 | 6 a 8 clientes | **MRR ≥ R$ 5 mil** (meta do plano) e 1 contrato Corporativo |

## 8. Unit economics (metas)
| Métrica | Meta | Observação |
|---|---|---|
| ACV | R$ 16 mil | mix Essencial/Profissional |
| CAC | ≤ R$ 5 mil | venda feita pelo fundador + parceiros no início |
| Margem bruta | ≥ 80% | infraestrutura pequena; implantação cobrada à parte |
| LTV (4 anos, 80% margem) | ≈ R$ 51 mil | |
| LTV/CAC | **> 3** (meta ≥ 8) | |
| Payback | < 6 meses | implantação + anual à vista ajudam |
| Churn anual | < 10% | trilha histórica gera custo de troca |
| Ciclo de venda | 30 a 60 dias | piloto pago de 30 dias encurta |

## 9. Motor de vendas
1. **Venda pelo fundador** (primeiros 10 clientes): lista de 20 contas, abordagem pessoal, demonstração de 15 min, piloto pago.
2. **Parceiros** (a partir do cliente 5): consultorias de ISO 27001/LGPD, auditorias, MSPs/empresas de TI terceirizada.
   Oferta: **20% de comissão no primeiro ano** ou revenda com margem. Eles têm o momento de compra (o cliente em certificação).
3. **Conteúdo** (LinkedIn): checklist de desligamento seguro, "o que o auditor pede", casos reais (com autorização).
4. **Evento-gatilho**: monitorar vagas de "analista de segurança/ISO 27001", anúncios de certificação, rodadas de
   investimento de fintechs (depois da rodada vem a due diligence de segurança).

### Como chegar nos primeiros 10 (sem lista comprada)
- Rede pessoal e ex-colegas que trabalham em TI/segurança de fintechs, BPOs e escritórios.
- Clientes e contatos do NFS-e Fácil (escritórios de contabilidade médios).
- Comunidades e eventos de segurança e de fintechs na sua cidade **[LISTAR]**.
- Consultores de ISO 27001 que você conheça: 1 parceiro bom traz 3 a 5 clientes.
- Regra LGPD: só contatos profissionais publicamente divulgados ou indicados; sempre oferecer saída.

## 10. Riscos comerciais
| Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|
| "A TI faz sozinha" | Alta | Médio | Vender prova + mapa; mostrar contas sem dono na reunião |
| Medo de dar credencial admin | Alta | Alto | Guia de permissões mínimas, questionário de segurança pronto, pentest antes do 3º cliente |
| Integração com sistema local sem API | Alta | Médio | Item manual no checklist + roadmap por demanda paga |
| Ciclo longo em banco | Média | Médio | Começar por fintechs menores e escritórios; piloto pago |
| Concorrente internacional baixa preço no Brasil | Baixa | Alto | Formato de evidência local, suporte em PT, conectores brasileiros |
