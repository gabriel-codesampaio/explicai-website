# T-002: Link do manual de exemplo com alvo de 24 px

- Prioridade: P2
- Tamanho: P
- Status: feito
- Agente: design
- Origem: Impeccable audit da landing 2026-11-03 (~17/20)

## Problema
O link "Ver um manual de exemplo" tinha altura de 24 px, abaixo dos 44 px de alvo de toque.

## Critérios de aceite
- [x] O link tem 44 px de altura em 375 e 1280 px.

## Onde
site/styles.css (.hero p>a).

## Como verificar
Medir a altura do link no navegador.

## Registro
Commit: 89051d0. `display:inline-flex` e `min-height:44px`.
