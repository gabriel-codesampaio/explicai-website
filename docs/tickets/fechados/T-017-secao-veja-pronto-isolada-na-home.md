# T-017: Seção "Veja pronto" isolada na home

- Prioridade: P2
- Tamanho: M
- Status: feito
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
431 px de altura em 1280 para um título, uma frase e um botão, sem imagem. A demo já tem três links na home (nav, herói e esta seção). A seção fica entre "O que vem junto" e o FAQ como bloco sozinho, com muito espaço.

## Critérios de aceite
- [x] A seção deixa de ser bloco isolado: o link da demo vira item de "O que vem junto" ou fecha "Como funciona", sem criar altura nova.
- [x] Home (1280 e 375) fica com a altura de hoje ou menor.
- [x] A demo continua alcançável pelo herói e pela nav; sem link repetido na mesma dobra.
- [x] pt e en iguais.

## Onde
site/index.html, site/en/index.html, site/styles.css (.demo)

## Registro
Seção Veja pronto removida. O link da demo fecha Como funciona; herói e nav seguem com o acesso. Altura da home (1280 / 375): pt 3361 / 3989 antes, 2931 / 3568 depois; en 3361 / 3991 antes, 2931 / 3622 depois (com o print novo do herói, medido neste commit).
