# T-014: Alt de imagem em português na página de recursos em inglês

- Prioridade: P2
- Tamanho: P
- Status: aberto
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
Em site/en/features/index.html (linha 85) o alt do print de Marcações diz "Contas a pagar" e "Nova conta", mas a imagem en mostra "Accounts payable" e "New bill". Leitor de tela lê o alt errado.

## Critérios de aceite
- [ ] Alt do passo-2-en cita os rótulos que a imagem en mostra (Accounts payable, New bill).
- [ ] grep por palavras em português em site/en/ só acha nome próprio ou trecho citado de propósito.

## Onde
site/en/features/index.html
