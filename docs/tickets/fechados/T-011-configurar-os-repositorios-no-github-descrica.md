# T-011: Configurar os repositórios no GitHub (descrição, homepage, topics, README)

- Prioridade: P2
- Tamanho: P
- Status: feito
- Agente: design
- Origem: Pedido da pessoa 2026-11-03

## Problema
Os repositórios explicai-website e explicai-studio precisam de metadados completos e bilíngues antes de publicar. O gh não está autenticado nesta máquina.

## Critérios de aceite
- [x] explicai-website: description bilíngue, homepage com a URL do Pages, topics, social preview e README com link para o site. explicai-studio: description bilíngue, homepage com a landing, topics. Sem ligar o Pages no studio.

## Onde
gh repo edit (sem mexer em package.json nem nos arquivos do explicai).

## Como verificar
`gh repo view --json description,homepageUrl,repositoryTopics`.

## Registro
gh repo edit feito em 2026-11-03: explicai-website (description bilíngue, homepage = Pages, 8 topics) e explicai-studio (description bilíngue, homepage = landing, 12 topics). Pages do studio não ligado, de propósito. Social preview não tem API: upload manual de site/img/social-preview.png em Settings > Social preview.
