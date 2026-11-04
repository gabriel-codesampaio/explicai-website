# T-020: Texto da home repete os passos e afirma sem prova

- Prioridade: P3
- Tamanho: P
- Status: feito
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
Meta description, lead do herói e "Como funciona" dizem a mesma sequência (cole, marque, escreva, exporte). "Fazer à mão leva dias" e "Quase nenhum tem um bom" são afirmações sem fonte.

## Critérios de aceite
- [x] Lead do herói diz outra coisa que "Como funciona" (o resultado para o cliente), sem repetir os verbos.
- [x] Frase do problema sem "dias" nem "quase nenhum", ou com fonte; nada de número inventado.
- [x] pt e en.

## Onde
site/index.html, site/en/index.html

## Registro
Lead do herói passa a falar do resultado para o cliente (logo, cores e dados escondidos), sem os verbos de Como funciona. A frase do problema sai de dias e quase nenhum: agora diz que cada tela que muda desatualiza o manual. Meta description mantida. pt e en.
