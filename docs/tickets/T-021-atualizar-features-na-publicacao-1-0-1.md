# T-021: Atualizar a página de recursos na publicação 1.0.1

- Prioridade: P2
- Tamanho: M
- Status: aberto
- Agente: frontend
- Origem: lote 1.0.1 (2026-11-05); a página de recursos fala do Studio 1.0.0

## Problema
A 1.0.1 traz recursos que a home e a página de recursos não mostram. Publicar a versão sem atualizar o site deixa a landing atrás do produto.

## Critérios de aceite
- [ ] Recursos novos descritos em site/features/ e site/en/features/ (pt e en): comandos `explicai check` e `explicai export` na CLI, comparação de versões, busca por Ctrl+P, modelos de página, checagem no Exportar e troca de imagem.
- [ ] Prints novos só onde o recurso é visual (busca, Exportar, troca de imagem), nos temas claro e escuro.
- [ ] Rótulo de versão e data de conferência da página trocados para 1.0.1 e para o dia da publicação.
- [ ] Demo (site/demo e site/en/demo) reexportada com o Studio publicado, com favicon e CLS <= 0,1.
- [ ] Sem rolagem lateral a 375 px, claro e escuro, pt e en; axe sem violação.

## Onde
site/features/, site/en/features/, site/index.html, site/en/index.html, site/img/feat-*.webp, site/demo/, site/en/demo/
