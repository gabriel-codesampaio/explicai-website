# T-017: Seção "Veja pronto" isolada na home

- Prioridade: P2
- Tamanho: M
- Status: aberto
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
431 px de altura em 1280 para um título, uma frase e um botão, sem imagem. A demo já tem três links na home (nav, herói e esta seção). A seção fica entre "O que vem junto" e o FAQ como bloco sozinho, com muito espaço.

## Critérios de aceite
- [ ] A seção deixa de ser bloco isolado: o link da demo vira item de "O que vem junto" ou fecha "Como funciona", sem criar altura nova.
- [ ] Home (1280 e 375) fica com a altura de hoje ou menor.
- [ ] A demo continua alcançável pelo herói e pela nav; sem link repetido na mesma dobra.
- [ ] pt e en iguais.

## Onde
site/index.html, site/en/index.html, site/styles.css (.demo)
