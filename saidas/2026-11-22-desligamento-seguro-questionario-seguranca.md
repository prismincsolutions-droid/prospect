# Questionário de segurança de fornecedor · respostas padrão

> Respostas honestas sobre o que **já existe** e o que está **planejado** (com prazo). Nunca marque "sim" para
> item planejado. Atualize a cada mudança. Itens com [ ] dependem da hospedagem de produção.

| # | Pergunta | Resposta | Situação |
|---|---|---|---|
| 1 | Onde os dados ficam armazenados? | [PROVEDOR], região São Paulo (Brasil) | [ ] ao contratar a hospedagem |
| 2 | Os dados são cifrados em repouso? | Credenciais dos conectores: AES-256-GCM com chave mestra fora do banco. Disco: cifrado pelo provedor | Credenciais: **sim**. Disco: [ ] |
| 3 | E em trânsito? | HTTPS (TLS 1.2+) com HSTS; conectores só aceitam HTTPS | **Sim** |
| 4 | Como a chave de criptografia é gerida? | Gerenciador de segredos da nuvem; nunca no código ou no banco | [ ] na hospedagem; chave por cliente no roadmap |
| 5 | MFA é obrigatório? | Sim, TOTP para todos os usuários, com proteção contra reuso | **Sim** |
| 6 | Suporta SSO (SAML/OIDC)? | Ainda não | Roadmap v1.0 |
| 7 | Controle de acesso por papel? | Administrador de TI, RH e auditor (somente leitura) | **Sim** |
| 8 | Como os clientes são isolados? | Toda consulta filtrada pela organização, com teste automatizado; instância dedicada no plano Corporativo | **Sim** |
| 9 | Que permissões vocês pedem nos nossos sistemas? | Mínimas: listar usuários, suspender, encerrar sessões e transferir arquivos (guia anexo) | **Sim** |
| 10 | Vocês conseguem ler nossos e-mails ou arquivos? | Não. Os escopos pedidos não dão acesso a conteúdo de e-mails ou documentos | **Sim** |
| 11 | Existe trilha de auditoria? | Sim: somente inserção, encadeada por hash, com verificação de integridade | **Sim** |
| 12 | Por quanto tempo os logs ficam guardados? | Enquanto durar o contrato (padrão); exportáveis a qualquer momento | **Sim** |
| 13 | Senhas dos usuários? | scrypt com sal, mínimo 12 caracteres, limite de tentativas | **Sim** |
| 14 | Proteções web? | CSP, proteção CSRF, cookies HttpOnly/SameSite=Strict, X-Frame-Options, no-store | **Sim** |
| 15 | Testes automatizados de segurança? | Sim: MFA, isolamento, cofre, trilha e webhook cobertos por testes | **Sim** |
| 16 | Pentest independente? | Contratado antes do 3º cliente; resumo disponível sob NDA | Planejado [DATA] |
| 17 | Certificações (ISO 27001, SOC 2)? | Ainda não. ISO 27001 no médio prazo | Planejado |
| 18 | Backup e recuperação? | Backup diário cifrado, teste de restauração mensal; RPO 24 h, RTO 8 h | [ ] na hospedagem |
| 19 | Plano de resposta a incidentes? | Sim, com aviso ao cliente em até 48 h | [ ] formalizar documento |
| 20 | Quem da Prism acessa os dados? | Só a equipe técnica autorizada, com MFA, para suporte solicitado | [ ] registrar acessos administrativos |
| 21 | Subcontratados? | [PROVEDOR DE NUVEM] | [ ] |
| 22 | Política de vulnerabilidades? | SECURITY.md com canal de relato; dependências atualizadas | **Sim** (canal: [E-MAIL]) |
| 23 | O que acontece se a Prism sair do ar? | Desligamentos podem ser feitos à mão nos sistemas; checklist e comprovantes exportáveis; nenhuma conta do cliente depende da Prism para funcionar | **Sim** |
| 24 | Fim do contrato? | Exportação completa e eliminação em até 30 dias com confirmação | **Sim** |
| 25 | Seguro cibernético? | [ ] | Avaliar ao assinar o 1º contrato Corporativo |
