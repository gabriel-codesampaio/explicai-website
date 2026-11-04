# T-019: Enxugar a página de recursos

- Prioridade: P2
- Tamanho: M
- Status: feito
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
6155 px em 1280 (8500 em 375) para oito blocos de 400 a 850 px, com numeral de 88 px em cada. Os blocos 05, 06 e 08 são só lista de texto, e 06 (editor) e 08 (local) pouco convencem quem entrega manual. O bloco 07 repete o diálogo do 02. A pessoa já achou a home grande; a página de recursos segue o mesmo caminho.

## Critérios de aceite
- [x] Blocos 05, 06 e 08 viram uma faixa compacta ("E mais") ou saem, sem perder o que decide (status por página, só aprovadas).
- [x] Bloco 07 sem imagem repetida (ver T-013).
- [x] Altura em 1280 cai pelo menos 20 por cento; índice do topo atualizado e sem âncora quebrada.
- [x] pt e en iguais; sem rolagem lateral em 375.

## Onde
site/features/index.html, site/en/features/index.html, site/styles.css (.rec)

## Registro
Blocos 05, 06, 07 e 08 viram a faixa E mais (revisão com status e só aprovadas, exportação, editor, local), sem imagem repetida; os passos antigos (passo-1 a passo-3) saem. Altura em Recursos (1280 / 375): pt 6155 / 8494 antes, 4618 / 6381 depois; en 6188 / 8587 antes, 4651 / 6477 depois (queda de 25% a 1280). Índice do topo e âncoras mantidos (#revisao, #exportacao, #editor, #local).
