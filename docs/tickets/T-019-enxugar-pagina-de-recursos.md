# T-019: Enxugar a página de recursos

- Prioridade: P2
- Tamanho: M
- Status: aberto
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
6155 px em 1280 (8500 em 375) para oito blocos de 400 a 850 px, com numeral de 88 px em cada. Os blocos 05, 06 e 08 são só lista de texto, e 06 (editor) e 08 (local) pouco convencem quem entrega manual. O bloco 07 repete o diálogo do 02. A pessoa já achou a home grande; a página de recursos segue o mesmo caminho.

## Critérios de aceite
- [ ] Blocos 05, 06 e 08 viram uma faixa compacta ("E mais") ou saem, sem perder o que decide (status por página, só aprovadas).
- [ ] Bloco 07 sem imagem repetida (ver T-013).
- [ ] Altura em 1280 cai pelo menos 20 por cento; índice do topo atualizado e sem âncora quebrada.
- [ ] pt e en iguais; sem rolagem lateral em 375.

## Onde
site/features/index.html, site/en/features/index.html, site/styles.css (.rec)
