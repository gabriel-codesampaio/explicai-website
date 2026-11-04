# Critique da landing, 2026-11-03

Escopo: home e /features/, pt e en. Modo Persuade. Público: quem entrega manual a cliente. Base: main em 6b5bd8f, site local, Chromium headless 1280 e 375, claro e escuro. Fora do escopo: prometer escrita ou captura automática, MCP, métrica ou depoimento.

## Medidas (1280 / 375, claro e escuro iguais)

| Página | Altura 1280 | Altura 375 | Rolagem lateral |
|---|---|---|---|
| home pt | 3361 | 3989 | não |
| home en | 3361 | 3991 | não |
| recursos pt | 6155 | 8494 | não |
| recursos en | 6188 | 8587 | não |

Contraste de texto (recursos): 5,9:1 no claro e 8,1:1 no escuro nos textos de apoio; listas a 15,8:1 e 16,2:1. Sem problema.

## Nota por heurística (Nielsen, 0 a 4)

| # | Heurística | Nota | Nota curta |
|---|---|---|---|
| 1 | Visibilidade do estado | 3 | Nav marca a página atual; copiar comando confirma ("Copiado") |
| 2 | Linguagem do usuário | 2 | Herói fala de "construtor", `npx` e "open source"; não fala de cliente |
| 3 | Controle e liberdade | 3 | Skip link, troca pt/en, demo à parte |
| 4 | Consistência | 2 | Alt em pt na página en; prints claros no tema escuro |
| 5 | Prevenção de erro | 3 | Botão com "Copie à mão" de reserva |
| 6 | Reconhecimento | 3 | Índice de recursos, passos numerados |
| 7 | Flexibilidade | 2 | Um só caminho de entrada (terminal) |
| 8 | Estética e minimalismo | 2 | Home com blocos esparsos; recursos longa; prints brancos no escuro |
| 9 | Recuperação de erro | 3 | Sem fluxo que falhe, FAQ cobre o que trava |
| 10 | Ajuda e documentação | 3 | FAQ e demo reais |
| | Total | 26/40 | |

## Achados

1. **Prints antigos em Recursos (confirmado).** Marcações (passo-2) e Exportação (passo-3) têm recorte cortado, barra de rolagem gravada e texto pela metade; o de Marcações não mostra nenhuma ferramenta que o texto cita. O de Exportação repete o diálogo do bloco 02. Os en estão em inglês de verdade; só o alt do passo-2-en ficou em pt ("Contas a pagar", "Nova conta"). Tickets T-013, T-014.
2. **Prints todos claros no tema escuro (confirmado).** Sem variante escura nem tratamento CSS: seis imagens viram caixas brancas sobre #0e1120. T-015.
3. **Print do herói.** Barra de rolagem gravada no canto; marcadores 2 e 3 cobrem "New bill" e "Unpaid"; texto da tabela ilegível a 600 px. Mostra o manual pronto, não o Studio. T-016.
4. **"Veja pronto" isolada (confirmado).** 431 px para título, frase e botão; a demo já tem três links na home. T-017.
5. **Persuasão: a home não diz para quem é.** O ganho de quem entrega a cliente (esconder dado, logo do cliente) vem depois de "Como funciona", em dois cartões sem imagem. T-018.
6. **Recursos longa.** 6155 px, oito blocos, três só de texto, numeral de 88 px em cada. Direção é cortar, não crescer. T-019.
7. **Texto da home.** Meta, lead e "Como funciona" repetem a sequência; "leva dias" e "quase nenhum tem um bom" sem fonte. T-020.

## Funciona

Herói e FAQ de linguagem direta; "O Explicaí não captura a tela" dito sem rodeio; contraste bom; sem rolagem lateral; nav, skip link e foco; pt e en com a mesma estrutura.

## Sem ticket

- CTA só em `npx`: público menos técnico pode travar. O FAQ "O que preciso instalar?" e a linha de apoio cobrem; alterar exige decisão de produto, não de página.
- Estrutura em 375 do herói: print abaixo do CTA, aceitável.

## Não conferido

Studio ter tema escuro (decide T-015); carregamento em rede lenta; leitor de tela; demo (/demo/); páginas en da demo; Lighthouse. Prints do site publicado não foram vistos: a leitura foi do site local da main 6b5bd8f.
