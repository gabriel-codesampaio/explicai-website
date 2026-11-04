# T-015: Prints do produto são caixas brancas no tema escuro

- Prioridade: P2
- Tamanho: M
- Status: aberto
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
Hero e os cinco prints de Recursos só têm versão clara. No tema escuro viram retângulos brancos sobre o fundo #0e1120, a parte mais brilhante da página, e puxam o olho para longe do texto. O T-009 descartou o caso quando só havia o hero; agora são seis imagens.

## Critérios de aceite
- [ ] Decisão registrada: o Studio tem tema escuro? Se tem, prints escuros via <picture> com prefers-color-scheme; se não, moldura de janela com borda e sombra suaves que assentem o branco no fundo.
- [ ] No tema escuro, nenhuma imagem é a área mais clara da primeira dobra do herói (conferir em 1280 e 375).
- [ ] Tema claro igual ao de hoje; sem rolagem lateral em 375.
- [ ] Peso total das imagens não dobra (variante escura só onde valer a pena).

## Onde
site/styles.css, site/img/, site/index.html, site/en/index.html, site/features/, site/en/features/
