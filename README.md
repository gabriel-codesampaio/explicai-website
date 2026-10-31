# explicai-website

Landing page do [Explicaí](https://github.com/gabriel-codesampaio/explicai-studio), construtor de manuais open source. / Landing page for Explicaí, the open source manual builder.

Endereço / URL: <https://gabriel-codesampaio.github.io/explicai-website/>

HTML e CSS estáticos, sem build. Tudo em `site/` (pt-BR na raiz, en-US em `site/en/`). Links relativos, para o endereço poder mudar de subcaminho para domínio sem quebrar nada.

## Ver local

```
npx serve site
```

(ou qualquer servidor estático apontado para `site/`)

## Publicar

Push na `main` que mude `site/` roda `.github/workflows/pages.yml`. Requer Settings > Pages > Source = GitHub Actions.

## Licença

MIT. Fontes (Archivo, Atkinson Hyperlegible Next, JetBrains Mono) sob OFL, licenças em `site/fonts/`.
