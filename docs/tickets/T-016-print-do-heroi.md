# T-016: Print do herói: barra de rolagem gravada, marcadores sobre o texto, ilegível

- Prioridade: P2
- Tamanho: M
- Status: aberto
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
O hero-pt/en.webp mostra o manual exportado com a barra de rolagem do navegador no canto direito. Os marcadores 2 e 3 cobrem o N de "New bill" e o U de "Unpaid". A 600 px de largura (333 px em 375) o texto da tabela não se lê. A imagem mostra o manual pronto, não o Studio em uso, que é o que o público escolhe instalar.

## Critérios de aceite
- [ ] Print do herói sem barra de rolagem e com os marcadores ao lado do elemento, não sobre o texto.
- [ ] Recorte que se lê em 600 px: título do manual, um passo e um marcador, sem tabela miúda.
- [ ] Decisão registrada: herói mostra o manual pronto ou o Studio; a outra imagem fica em Recursos.
- [ ] pt e en; alt atualizado; peso igual ou menor.

## Onde
site/img/hero-*.webp, site/index.html, site/en/index.html
