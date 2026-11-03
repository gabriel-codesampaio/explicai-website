# T-006: Faltam og:image:alt, canonical e theme-color

- Prioridade: P3
- Tamanho: P
- Status: feito
- Agente: design
- Origem: Impeccable audit da landing 2026-11-03 (~17/20)

## Problema
As páginas não tinham texto alternativo da imagem de compartilhamento, canonical nem theme-color.

## Critérios de aceite
- [x] As duas páginas têm og:image:alt, canonical próprio (pt na raiz, en em /en/) e theme-color para claro e escuro.

## Onde
site/index.html, site/en/index.html (head).

## Como verificar
Ler o head das duas páginas.

## Registro
Commit: 0275d29. theme-color usa as cores de papel do tema (#f5f6fa e #0e1120).
