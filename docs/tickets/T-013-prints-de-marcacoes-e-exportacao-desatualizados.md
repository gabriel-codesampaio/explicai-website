# T-013: Prints de Marcações e Exportação em Recursos estão desatualizados

- Prioridade: P2
- Tamanho: M
- Status: aberto
- Agente: frontend
- Origem: critique da landing, 2026-11-03 (docs/discovery/2026-11-03-critique-landing.md)

## Problema
Os blocos 04 (Marcações) e 07 (Exportação) usam passo-2 e passo-3, prints antigos: recorte com a barra de ferramentas e o texto cortados ("Result: the bill stays..." pela metade), barra de rolagem gravada na imagem, título "Add a bi" truncado. O bloco 04 fala dos atalhos V, M, D, S, A e o print não mostra nenhuma ferramenta. O bloco 07 repete o diálogo de exportação que o bloco 02 já mostra maior.

## Critérios de aceite
- [ ] Bloco 04 com print do Studio 0.2 que mostra a barra de marcação (marcador, destaque, seta, área), sem texto cortado nem barra de rolagem, pt e en.
- [ ] Bloco 07 sem repetir o diálogo do bloco 02: recorte só dos três formatos ou sem imagem (ver T-019).
- [ ] Texto da imagem no idioma da página (en com UI em inglês); alt descreve o que a imagem mostra.
- [ ] Peso por imagem não sobe em relação ao atual.

## Onde
site/img/passo-2-*.webp, site/img/passo-3-*.webp, site/features/index.html, site/en/features/index.html
