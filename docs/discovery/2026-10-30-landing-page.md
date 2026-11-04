# Discovery: landing page do Explicaí, no repositório próprio (2026-10-30)

Complementa: [discovery anterior](../../../explicai/docs/discovery/2026-10-30-landing-page.md) (`explicai/docs/discovery/2026-10-30-landing-page.md`, que recomendava `site/` dentro do repo do Studio). Aqui: repositório `explicai-website`, o texto de cada seção, a direção visual, a stack e a spec. Não repete o que a anterior já decidiu (problema, "a demo é o próprio produto", opção A).

Ideia original (caderno, `#marca`, 30/10/2026): "Criar uma Landing Page com uma demonstração do Explicaí, adicionar o github pages".

## O que mudou com o repo próprio

**Decisão fechada:** GitHub Pages, repo `explicai-website`, endereço github.io, sem domínio próprio por agora, publicado por GitHub Actions. Desenvolvimento depois dos tickets do Studio.

- A landing e o Studio deixam de dividir workflow. O build do site **não pode mais contar com o código do Studio na mesma árvore**. A demo precisa vir do pacote `explicai` (`explicai/core`, que exporta `exportManual`), instalado do npm. Antes da publicação (T-038), a demo é gerada localmente e versionada.
- Endereço do Pages vira `https://gabriel-codesampaio.github.io/explicai-website/` (página de projeto, subcaminho). Todo link e asset precisa ser **relativo**; assim a troca futura para domínio próprio (raiz) não quebra nada.
- Fatos conferidos agora no código do Studio (grep, sem ler tudo):
  - O export HTML sai em `exportacao/html/` com `index.html`, `assets/` e `fonts/`, caminhos relativos (`src/core/export/index.ts`, `html.ts`). É autocontido e deve funcionar em subcaminho. Falta só abrir sob subcaminho num navegador (a spec cobra isso).
  - **Não existe comando `export` na CLI.** `src/cli.ts` só abre o Studio (`explicai [pasta] [--port] [--no-open]`). Exportar é pela interface ou por `exportManual(dir, "html")` de `explicai/core`. O script de build da demo usa essa função.
  - Discrepância de nome: `package.json` aponta `gabriel-codesampaio/explicai-studio`; `marca-resumo` e `90_SYNTHESIS.md` dizem `gabriel-codesampaio/explicai`. Os links da landing dependem de qual vale. Ver pergunta 1.
  - Fontes da marca já empacotadas (OFL), pequenas: Archivo variável 35 KB, Atkinson 400 e 700 com 12 KB cada, JetBrains Mono variável 40 KB. Cerca de 100 KB no total.
- Estado do repo `explicai-website`: só `LICENSE` e `README.md`, branch `main`.

## Pesquisa de referência

Não fiz. A anterior já registrou que não olhou landings de ferramentas de dev. Nada aqui afirma o que outras páginas fazem. O formato abaixo (promessa, comando copiável, demo visível, link do repositório) segue a hipótese da anterior, **sem fonte**. Se a pessoa quiser, uma rodada de `deep-research` sobre como CLIs open source mostram `npx`, demo e estrelas cabe antes de fechar a ordem das seções; não bloqueia a spec.

## 1. Objetivo, público e medição

**Objetivo único:** quem chega decide rodar `npx explicai manuais` depois de ver um manual pronto.

**Público (mesmo peso, da marca):** dev solo ou equipe pequena de SaaS; software house que entrega sistema; redator técnico ou analista de suporte. Chegam por três gatilhos: lançar sem manual, o cliente pedir o manual na entrega, a tela mudar e o manual envelhecer. Chegam do README, do npm, do blog (codesampa.io) e de link compartilhado. Desktop é o uso do Studio; a landing também precisa ficar boa em 375 px, porque o link é aberto no celular.

**Sinais, do mais forte ao mais fraco:**

| Sinal | Como medir | Observação |
|---|---|---|
| Instalou via `npx` | downloads no npm (`api.npmjs.org/downloads`) depois da publicação | Inclui CI e espelhos; é tendência, não pessoas. |
| Estrela no GitHub | contagem no repositório, semana a semana | Link "Dar uma estrela" discreto no fim, não botão. |
| Abriu a demo | precisa de contador: hoje não há | Pages não dá estatística. Ver pergunta 4. |
| Copiou o comando | evento no botão | Só se houver contador. |

Não defino meta numérica: não há linha de base. Meta = baseline da primeira semana, depois comparar. Sem cookie, sem banner, sem rastreador de terceiros por padrão (coerente com "roda local, sem nuvem").

## 2. Arquitetura da página e texto

Uma página, rolagem única, ordem pensada para quem decide em segundos. Regras aplicadas: uma ideia por frase, voz ativa, "você", sem hype, sem comparação, **sem depoimento, número de uso ou "usado por"** (não existe: `PRODUCT.md`). O texto passou pelo `humanizer`: sem contraste "não é X, é Y", sem fecho de efeito, sem travessão, sem lista de três só por ritmo. Onde ainda há hipótese, está marcado.

Voz do cliente (`conversion-copywriting`): **não há pesquisa real**. Os gatilhos vêm da síntese da marca, que veio da entrevista com a própria pessoa. Não escrevi citação de usuário. As falas abaixo são do Explicaí, não de clientes. Para VoC de verdade, o caminho é ler issues e fóruns de ferramentas do ramo (`customer-research`, não instalada aqui) e testar o texto com 3 ou 4 devs.

### Bloco 0. Cabeçalho
Logo horizontal (`brand/logo/explicai-logo-horizontal.svg`, e a versão `-escuro` no tema escuro). Links: `Demo`, `GitHub`, `Blog`. Seletor `PT | EN`. Sem menu hambúrguer: são três links curtos; em 375 px cabem numa linha com o logo menor.

### Bloco 1. Herói
Rótulo mono: `CONSTRUTOR DE MANUAIS · OPEN SOURCE`

| pt-BR | en-US |
|---|---|
| **H1:** Tira o print e explica. O Explicaí monta o manual. | **H1:** Tira o print e explica. O Explicaí monta o manual. |
| Construtor de manuais open source e gratuito. Cole os prints, marque a tela, escreva os passos e exporte em PDF, HTML e Markdown. | The free, open source manual builder. Paste screenshots, mark them up, write the steps and export to PDF, HTML and Markdown. |
| Comando: `npx explicai manuais` | Command: `npx explicai manuals` |
| Botão sólido: **Copiar comando** (vira "Copiado") | Solid button: **Copy command** (becomes "Copied") |
| Linha pequena: Precisa de Node 20.12 ou mais novo. Roda na sua máquina, sem conta e sem nuvem. | Needs Node 20.12 or newer. Runs on your machine, no account, no cloud. |
| Link de texto: Ver um manual de exemplo → | Text link: See a sample manual → |

Imagem: print real do manual de exemplo exportado, com marcadores cobalto e um destaque, `alt` descrevendo o que mostra. A frase "o Explicaí explica" recebe o marca-texto (único uso no herói).
O slogan fica em português nas duas línguas (regra da marca). A linha de apoio em inglês é **proposta minha**; a pendência da síntese ("linha descritiva em inglês") segue aberta até a pessoa aprovar.

### Bloco 2. O problema
Rótulo: `POR QUE EXISTE`

| pt-BR | en-US |
|---|---|
| **Todo sistema precisa de manual. Quase nenhum tem um bom.** | **Every system needs a manual. Almost none has a good one.** |
| Fazer à mão leva dias: tirar print, marcar a tela, escrever cada passo, exportar. Depois a tela muda e você faz tudo de novo. | Doing it by hand takes days: take the screenshot, mark the screen, write each step, export. Then the screen changes and you start over. |
| **Lançar.** O sistema foi para o ar e o manual ficou para a semana que vem. | **Launch.** The system is live and the manual is next week's job. |
| **Entregar.** O cliente pediu o manual junto com o sistema. | **Hand over.** The client wants the manual with the system. |
| **Atualizar.** A tela mudou e o manual continua com a tela antiga. | **Update.** The screen changed and the manual still shows the old one. |

Base: história de origem oficial (`90_SYNTHESIS.md`, seção 6) e gatilhos (seção 3). "Para a semana que vem" é o único humor do bloco; a marca permite no site. Hipótese: a dor soa verdadeira para o público; ninguém validou.

### Bloco 3. Do print ao manual, em três passos
Rótulo: `COMO FUNCIONA`. Cada passo com número mono cobalto (1, 2, 3, igual ao manual) e um recorte do Studio real.

| pt-BR | en-US |
|---|---|
| **1. Cole o print.** Copie a tela do seu sistema e cole na página. A imagem entra no manual. | **1. Paste the screenshot.** Copy your system's screen and paste it into the page. The image goes into the manual. |
| **2. Marque a tela.** Coloque marcadores numerados, destaques, setas e áreas clicáveis, e escreva o que a pessoa faz em cada um. | **2. Mark the screen.** Add numbered markers, highlights, arrows and clickable areas, and write what the reader does at each one. |
| **3. Exporte.** Gere PDF, HTML ou Markdown com um clique. | **3. Export.** Generate PDF, HTML or Markdown in one click. |
| Nota: O Explicaí não captura a tela. O print vem de você. | Note: Explicaí does not capture the screen. The screenshot comes from you. |

A nota é de expectativa (restrição real, `PRODUCT.md`): corta a pergunta "ele tira o print sozinho?" antes de virar decepção. Marca-texto: só em "Marque a tela".

### Bloco 4. A demonstração
Rótulo: `VEJA PRONTO`

| pt-BR | en-US |
|---|---|
| **Veja um manual feito no Explicaí.** | **See a manual made with Explicaí.** |
| "Financeiro" é um sistema inventado para este exemplo. O manual é o HTML que o Explicaí exporta, sem edição. | "Financeiro" is a made-up system for this example. The manual is the HTML Explicaí exports, unedited. |
| Link (contorno, não sólido): **Abrir o manual** | Link: **Open the manual** |
| Link de texto: Ver a mesma pasta em Markdown | Text link: See the same folder in Markdown |

"Sem edição" só vale se o build gerar o HTML (critério de aceite). Se alguém retocar à mão, tirar a frase.

### Bloco 5. Um manual, dois leitores
Rótulo: `FORMATOS`

| pt-BR | en-US |
|---|---|
| **PDF para quem lê. Markdown para quem automatiza.** | **PDF for people who read. Markdown for people who automate.** |
| Cada manual é uma pasta de Markdown com as imagens, versionada no git ao lado do código. Pessoas leem o PDF ou o site em HTML. Uma IA lê os mesmos arquivos. | Every manual is a folder of Markdown with its images, kept in git next to your code. People read the PDF or the HTML site. An AI reads the same files. |
| (trecho real da pasta e de uma página, copiado do manual de exemplo no build) | (same snippet) |

É o diferencial 3 da marca, visível: um bloco mono com a árvore e 8 a 10 linhas de uma página de verdade. Gerado no build para não divergir do formato.

### Bloco 6. Explicaí Agent (uma linha)
| pt-BR | en-US |
|---|---|
| Prefere pedir a uma IA? O Explicaí Agent monta o manual pelo MCP, no mesmo formato. [Ver no GitHub] | Prefer to ask an AI? Explicaí Agent builds the manual over MCP, in the same format. [See on GitHub] |

É a mensagem 4 da hierarquia, por isso a última e a menor. Sem robô, sem ícone de IA. Só publicar quando `explicai-mcp` estiver público (pergunta 6).

### Bloco 7. Aberto e gratuito
| pt-BR | en-US |
|---|---|
| **Aberto de verdade.** Licença MIT, código no GitHub, processo à vista no blog. Documentar um sistema não pode custar mais que construí-lo. | **Open for real.** MIT license, code on GitHub, the process written up on the blog. Documenting a system should not cost more than building it. |
| Links de texto: Código no GitHub · Dar uma estrela · Ler os posts "Explicaí #N" | Code on GitHub · Give it a star · Read the "Explicaí #N" posts |

A mensagem 1 da hierarquia (open source e gratuito) já abre a página, na primeira frase do herói. Este bloco repete e dá os links. "Gratuito" não promete "para sempre": o modelo de sustentação segue em aberto na síntese.

### Bloco 8. Perguntas rápidas
Três, só as que seguram a instalação:

| pt-BR | en-US |
|---|---|
| **Preciso de conta?** Não. O Explicaí roda em `localhost` e salva numa pasta sua. | **Do I need an account?** No. Explicaí runs on `localhost` and saves to a folder you choose. |
| **Funciona em português e em inglês?** A interface sim. O tom do manual gerado é profissional, tranquilo ou o que você descrever. | **Does it work in Portuguese and English?** The interface does. The tone of the generated manual is professional, relaxed or whatever you describe. |
| **O que preciso instalar?** Node 20.12 ou mais novo. O resto o `npx` baixa. | **What do I need to install?** Node 20.12 or newer. `npx` fetches the rest. |

### Bloco 9. Chamada final e rodapé
`npx explicai manuais` com **Copiar comando** (o único sólido naquele trecho de tela).
Rodapé: `um projeto codesampa.io` · MIT · GitHub · npm · Blog · Brand book. Sem foto nem nome do fundador na página (regra de endosso); a autoria fica na licença e no GitHub.

## 3. Direção visual

Base: o conceito da marca, "mesa de revisão": papel, caneta azul, marca-texto, números de marcador. A página é um documento bem diagramado, não um "site de startup".

**Tipografia** (as três fontes da marca, locais, `font-display: swap`, fallback com `size-adjust`):
- Archivo 700 nos títulos, tamanho fluido (`clamp(2rem, 6vw, 3.5rem)` no H1), entrelinha 1.1.
- Atkinson Hyperlegible Next 400 e 700 no texto, 18 px, entrelinha 1.6, linha com no máximo 65 caracteres.
- JetBrains Mono nos rótulos de seção (maiúsculo, espaçado, pequeno), no comando, nos números e no trecho de Markdown.

**Cor**, só dos tokens de `explicai/web/src/styles/tokens.css`:

| | Claro | Escuro |
|---|---|---|
| Fundo | `#F5F6FA` | `#0E1120` |
| Texto | `#151A33` | `#ECEEF7` |
| Texto secundário | `#575E78` | `#A3AAC4` |
| Cobalto (ação, link, número) | `#2B4FE0` | `#7088FF` |
| Texto sobre cobalto | `#FFFFFF` | `#0E1120` |
| Linha | `#DCE0EB` | `#2A3050` |
| Marca-texto | `#FFD43B` (faixa 55%) | `#FFD43B` (faixa 30%) |

Tema por `prefers-color-scheme`, sem botão (menos JS; a página tem um só lugar de decisão). Cobalto só na ação e nos números. Botão sólido cobalto: **um por trecho de tela** (copiar comando). Demo é contorno; o resto é link.

**Marca-texto:** só em frase-chave, no máximo uma por seção e três na página (herói "o Explicaí explica" e passo "Marque a tela"; nenhum outro por padrão). Faixa por `box-shadow: inset 0 -0.45em 0 var(--marca-faixa)`, não por `linear-gradient`, para não ferir "sem gradiente". No escuro, texto claro sobre faixa a 30% pode perder contraste: medir 4,5:1; se falhar, fundo sólido `#FFD43B` com texto `#151A33`. Ainda não medido.

**Prints e demo:**
- Herói: print do manual de exemplo exportado, em WebP, com `width` e `height`, `fetchpriority="high"`, sem lazy. Um arquivo só, claro; no tema escuro aparece como uma folha de papel sobre fundo escuro, coerente com a ideia, e evita dobrar os recursos.
- Passos: 3 recortes do Studio real, `loading="lazy"`.
- Sistema fictício declarado na legenda. O app dos prints é um mock simples feito por nós (HTML estático e print por Playwright ou DevTools), nunca imitação de produto real.
- Sem GIF na v1. Sem ícone decorativo. Sem sombra de card em tudo nem raio grande: raio 3 px; só o marcador é redondo.

**Layout:**
- 375 px: uma coluna, margens de 20 px. H1, apoio, comando e botão empilhados; botão em largura total e alvo de toque de pelo menos 44 px; o `<code>` do comando rola na horizontal dentro da caixa, a página nunca estoura; o print do herói vem depois do botão.
- Desktop (960 px ou mais): coluna de 1120 px no máximo; herói em duas colunas (texto 5, print 7); passos em três colunas; formatos em duas.
- Foco visível em tudo (contorno cobalto de 2 px, deslocado), `prefers-reduced-motion` respeitado (a página não precisa de animação), cor nunca é o único sinal.

**Wireframe (referência):**

```
375 px                          desktop >= 960 px
+-------------------------+     +-----------------------------------------------------+
| [logo]     Demo  GitHub |     | [logo]                  Demo  GitHub  Blog  PT|EN   |
|-------------------------|     |-----------------------------------------------------|
| CONSTRUTOR DE MANUAIS   |     | CONSTRUTOR DE MANUAIS       +---------------------+ |
| Tira o print, que       |     | Tira o print, que           | [print do manual    | |
| ==o Explicaí explica.== |     | ==o Explicaí explica.==     |  com marcadores     | |
| Construtor ... gratuito |     | Construtor ... gratuito     |  1 2 3 e destaque]  | |
| npx explicai manuais    |     | npx explicai manuais        +---------------------+ |
| [  Copiar comando  ]    |     | [ Copiar comando ]   Ver um manual de exemplo ->    |
| Node 20.12 ... sem nuvem|     | Node 20.12 ... sem nuvem                            |
| [print do manual]       |     |-----------------------------------------------------|
|-------------------------|     | POR QUE EXISTE                                      |
| POR QUE EXISTE          |     | Todo sistema precisa de manual...                   |
| Todo sistema precisa... |     | Lançar        | Entregar        | Atualizar         |
| Lançar. ...             |     |-----------------------------------------------------|
| Entregar. ...           |     | COMO FUNCIONA                                       |
| Atualizar. ...          |     | 1 Cole o print | 2 Marque a tela | 3 Exporte        |
|-------------------------|     | [recorte]        | [recorte]         | [recorte]       |
| COMO FUNCIONA           |     |-----------------------------------------------------|
| 1 Cole o print  [rec.]  |     | VEJA PRONTO     [ Abrir o manual ]   Markdown ->    |
| 2 Marque a tela [rec.]  |     |-----------------------------------------------------|
| 3 Exporte       [rec.]  |     | FORMATOS   PDF ... Markdown ...  | pasta + trecho .md|
|-------------------------|     |-----------------------------------------------------|
| VEJA PRONTO ...         |     | Agent (1 linha) | Aberto e gratuito | Perguntas     |
| FORMATOS ...            |     |-----------------------------------------------------|
| Agent / Aberto / FAQ    |     | npx explicai manuais    [ Copiar comando ]          |
| npx ...  [ Copiar ]     |     | um projeto codesampa.io · MIT · GitHub · npm        |
| rodapé                  |     +-----------------------------------------------------+
+-------------------------+
```

`==...==` é o marca-texto. Um HTML estático de referência só compensa depois que a pessoa aprovar a ordem; o wireframe basta para decidir.

## 4. Stack recomendada

**HTML e CSS estáticos, sem framework e sem bundler.** É uma página, dois idiomas e uma interação (copiar o comando). Astro, Next ou Vite pagariam uma árvore de dependências para gerar o que dois arquivos HTML já são. Mesma lógica do Studio: nada de abstração sem segundo uso. Sobe para Astro só se virar site com várias páginas (docs, changelog), que esta spec não pede.

Estrutura:

```
explicai-website/
  site/                      fonte da página (copiada como está para o artefato)
    index.html               pt-BR
    en/index.html            en-US
    styles.css               tokens + estilos (um arquivo, ~200 linhas)
    copy.js                  copiar comando (~15 linhas), com defer
    fonts/  img/  favicon.svg  social-preview.png
  demo-src/financeiro/       manual de exemplo (Markdown, assets, anotações), formato de docs/manual-format.md
  scripts/build-demo.mjs     chama exportManual(dir, "html") de explicai/core e copia para _site/demo/
  .github/workflows/pages.yml
  package.json               devDependency: explicai; script "build"
```

**Build e publicação:** `pages.yml` em push na `main` que toque `site/**`, `demo-src/**`, `scripts/**` ou a versão do `explicai`: `npm ci`, `node scripts/build-demo.mjs` monta `_site/` (copia `site/` e exporta a demo para `_site/demo/`), `actions/upload-pages-artifact` e `actions/deploy-pages`. Pages configurado como "GitHub Actions" (Settings > Pages > Source), sem `CNAME`, sem domínio. Roda também por `schedule` semanal, para a demo acompanhar a versão publicada do Explicaí (princípio 1 do produto: o manual acompanha o código).

**Como a demo sai do export:** `exportManual("demo-src/financeiro", "html")` grava `demo-src/financeiro/exportacao/html/` (`index.html`, `assets/`, `fonts/`, caminhos relativos); o script copia a pasta para `_site/demo/`. Os trechos da seção Formatos (árvore e pedaço de `.md`) saem do mesmo `demo-src`, no build, para nunca divergir.

**Antes do npm (T-038 aberto):** `explicai` não está publicado, então `npm ci` falha. Duas saídas: (a) gerar a página e a demo localmente e commitar a demo gerada, só até o npm sair; (b) `devDependency` por Git, que exige o repo público e o `dist/` compilado (o Git não traz, o npm traz). Recomendo (a): não depende do que ainda não existe. O workflow passa a gerar a demo depois da publicação.

**Medição:** nenhuma no lançamento. Se a pessoa aprovar contador sem cookie (GoatCounter, Plausible ou Cloudflare Web Analytics; **não verifiquei preço, licença nem política de cada um**), entra como um `<script defer>` e uma linha de aviso no rodapé.

**Performance (`core-web-vitals`)**, metas para página estática, a medir com Lighthouse e DevTools em 375 px com throttling (não medido):
- LCP até 2,5 s: o elemento de LCP é o H1 ou o print do herói. Preload da Archivo e do print, `fetchpriority="high"` no print, fontes locais (zero CDN, zero conexão extra), um único `styles.css` pequeno.
- CLS até 0,1: `width` e `height` em toda imagem, `size-adjust` no fallback das fontes.
- INP até 200 ms: um handler só (copiar), sem biblioteca.
- Peso: HTML, CSS, JS, fontes e herói abaixo de 300 KB (fontes ≈ 100 KB; meta minha, não medida). Imagens dos passos em WebP com `loading="lazy"`.
- Sem recurso externo nem tag de terceiros.

**Esforço:**

| Peça | Tam. |
|---|---|
| Esqueleto do repo, workflow, Pages, README | P |
| Manual de exemplo "Financeiro" (2 a 3 páginas, mock do app, 3 a 4 prints com marcações) | M (o item mais trabalhoso: o conteúdo não existe) |
| Página pt-BR (HTML, CSS, copiar comando, claro e escuro, 375 px) | M |
| Versão en-US | P |
| Script de build da demo e dos trechos | P |
| Verificação (a11y, 375 e desktop, claro e escuro, vitals) | P |

Total: **G** se for tudo de uma vez; entregável em fatias.

## 5. Riscos e dependências

| Risco | Efeito | Mitigação |
|---|---|---|
| **npm não publicado** (T-038 aberto) | A landing manda rodar um comando que falha | Não ir ao ar antes da publicação. Pode ser construída e revisada antes, com Pages desligado. |
| **Repo do Studio privado ou nome errado** (`explicai` ou `explicai-studio`) | Links quebrados. Pages em repo privado exige plano pago; não verifiquei a visibilidade do `explicai-website` | Confirmar visibilidade e nome dos dois repos antes de escrever links. Ligar o Pages só com o repo público. |
| **Manual de exemplo não existe** | Sem demo nem print, a página perde o diferencial | Fatia própria, a primeira da ordem. Sistema fictício declarado. |
| Demo quebra no subcaminho | Imagens e fontes sem carregar | Caminhos relativos já são o padrão do export; critério de aceite abre `/explicai-website/demo/` de verdade. |
| Prints envelhecem com o Studio | Landing mostra tela antiga | Só 3 recortes. O workflow semanal refaz a demo, mas não os recortes do Studio (são imagem). Avisar no ticket de design do Studio. |
| Texto sem prova | "Aberto" e "gratuito" sem sustentação definida | Não prometer "para sempre". Sem número, sem depoimento. |
| Inglês dobra a manutenção | Dois HTML para ajustar | Página curta (cerca de 400 palavras). Mudança de texto sempre nos dois arquivos, no mesmo commit. |
| Domínio futuro | Troca de subcaminho para raiz | Links relativos. `CNAME` e `rel="canonical"` só quando houver domínio. INPI e nome seguem abertos (síntese, seção 9). |
| `explicai-mcp` sem versão pública | Bloco 6 aponta para repo fechado | Omitir o bloco até lá. |
| Segurança | Push e ativação do Pages | Passar pelo agente `seguranca` antes de ligar o Pages e de qualquer instalação nova. |

## 6. Perguntas para a pessoa (com recomendação)

**Decisão fechada pela pessoa (30/10/2026):** a landing é publicada no GitHub Pages, repo `explicai-website`, em `gabriel-codesampaio.github.io/explicai-website/`, **sem domínio próprio por agora**. Publicação por Actions → Pages. Desenvolvimento logo depois dos tickets do Studio. Domínio fica fora do escopo; links relativos mantêm a troca barata se um dia vier.

1. **Qual é o repositório do Studio:** `explicai` ou `explicai-studio`? `package.json` e a síntese divergem. Recomendo escolher um e alinhar o outro lado (`repository` e `homepage` do npm, ou a síntese) antes de publicar.
2. **Ordem:** a landing só vai ao ar depois do repo do Studio público e do `npx explicai` publicado? Recomendo sim; a página pode ficar pronta antes, com o Pages desligado.
3. **Demo:** manual exportado em HTML ou GIF? Recomendo HTML. GIF só se a medição mostrar que abrem a demo e não instalam.
4. **Medição:** nenhum contador ou contador sem cookie? Recomendo nenhum no início; ler estrelas e downloads do npm por semana. Se a demo precisar ser medida, GoatCounter (a verificar licença e política) como única exceção.
5. **Inglês na v1?** Recomendo pt-BR e en-US juntos, se a pessoa aprovar a linha descritiva em inglês proposta no bloco 1 (a marca é bilíngue desde o dia 1 e, sem framework, o custo é baixo). Sem a aprovação, sai só pt-BR e o EN entra na fatia seguinte.
6. **Bloco do Agent:** entra agora? Recomendo só quando `explicai-mcp` estiver público.
7. **Humor:** manter "o manual ficou para a semana que vem"? Recomendo manter: é a única piada da página e fica fora de passo e de erro.
8. **Sistema de exemplo:** "Financeiro" fictício, com mock simples? Recomendo sim, com nota na legenda e nada que lembre um cliente real.
9. **Estrela:** pedir no rodapé? Recomendo um link de texto discreto, sem botão e sem contador na tela.

## 7. Rascunho de spec (formato `especificar`)

**Escopo (opção recomendada: página estática pt-BR e en-US, demo exportada do Studio)**
- Repositório `explicai-website`: `site/` (HTML, CSS, JS de copiar, fontes, imagens), `demo-src/financeiro/`, `scripts/build-demo.mjs`, `.github/workflows/pages.yml`, README com endereço e como rodar.
- Blocos 0 a 9 na ordem acima. Bloco 6 depende da pergunta 6.
- Fora: GIF, demo interativa do Studio, várias páginas, domínio próprio (decisão fechada), blog dentro do site, contador (salvo decisão da pergunta 4), qualquer mudança em `explicai/web`, `explicai/src` ou no formato do manual.

**Fatias sugeridas (cada uma verificável sozinha):**
1. **Esqueleto e Pages** (P): `package.json`, `site/index.html` mínimo, `pages.yml`, README. Aceite: o endereço abre uma página de teste com fontes locais carregando sob o subcaminho.
2. **Manual de exemplo "Financeiro"** (M): `demo-src/financeiro` com 2 a 3 páginas, 3 a 4 prints de um mock fictício, marcações. Aceite: abre no Studio sem aviso; exporta HTML sem aviso de imagem faltando.
3. **Build da demo** (P): `scripts/build-demo.mjs` com `exportManual` de `explicai/core`; enquanto o npm não saiu, demo gerada local e commitada. Aceite: `/demo/` abre com imagens, fontes e links sob o subcaminho.
4. **Página pt-BR** (M): blocos 0 a 9, `styles.css` com tokens, claro e escuro, 375 px e desktop, botão de copiar. Aceite abaixo.
5. **Versão en-US** (P): mesmo HTML, texto do quadro en-US, seletor de idioma, `lang` e `hreflang` corretos.
6. **Trechos gerados da seção Formatos** (P): árvore e pedaço de `.md` extraídos de `demo-src` no build.
7. **Verificação e liberação** (P): a11y, vitals, segurança, ligar o Pages, link no README do Studio e no post do blog.

**Critérios de aceite:**
- A URL do Pages abre a landing; `/demo/` e `/en/` abrem sob o subcaminho com todos os recursos.
- Texto igual ao deste documento (ou ao que a pessoa ajustar). Nenhum depoimento, número de uso, "usado por" nem comparação com concorrente. `humanizer` passado na versão final.
- Um botão sólido por trecho de tela; cores só dos tokens; sem gradiente; sem ícone decorativo; marca-texto no máximo uma vez por seção.
- Claro e escuro com contraste de texto 4,5:1 medido (inclusive texto sobre o marca-texto no escuro e o botão `#0E1120` sobre `#7088FF`). Foco visível. Operação só com teclado. `alt` em todo print descrevendo a marcação. `lang` e `hreflang` certos.
- 375 px sem rolagem horizontal da página; alvos de toque de pelo menos 44 px; comando legível.
- Copiar comando funciona (clipboard); sem JS, o texto continua selecionável.
- Core Web Vitals em 375 px com throttling: LCP até 2,5 s, CLS até 0,1, INP até 200 ms; peso inicial abaixo de 300 KB sem as imagens lazy. Nenhuma requisição para domínio externo.
- `npx explicai manuais` funciona de verdade antes de o Pages ser ligado (T-038 e publicação no npm concluídos).
- Segurança revisou o workflow e o push; `GITHUB_TOKEN` com permissões mínimas (`pages: write`, `id-token: write`, `contents: read`).
- Nenhum arquivo de `explicai/web`, `explicai/src` ou `manual.json` alterado.

**Riscos:** seção 5. Ordem de dependência: npm publicado e repo do Studio público antes da fatia 7; fatia 2 antes das 3, 4 e 6.

**Ferramentas que ajudariam, não instaladas:** `customer-research` (dor real em fóruns e issues) e uma rodada de `deep-research` para referências de landing de CLI open source. Usadas aqui como método: `brand` e a síntese, `conversion-copywriting`, `humanizer`, `core-web-vitals`. `hallmark` e `impeccable` ficam para a fatia 4, quando houver HTML para criticar.

## Não verificado

Como outras landings de ferramenta de dev apresentam `npx`, demo e estrelas; se a dor da página existe de verdade; visibilidade do `explicai-website` e do repo do Studio; se o Pages já está ligado; se o export abre bem sob o subcaminho no navegador; contraste medido dos pares do tema escuro; o formato real da árvore que o bloco Formatos vai mostrar.
