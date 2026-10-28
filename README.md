# Pata Amiga — Site institucional de ONG

Projeto Integrador · Fundamentos da Web (HTML, CSS e JavaScript) · UNICID

## ONG
**Pata Amiga** (ONG fictícia): combate a fome e o abandono de cães e gatos, com pontos de
alimentação, cuidados veterinários e adoção responsável.

## Integrantes
- Victor Sousa dos Anjos
- _(nome do integrante)_
- _(nome do integrante)_
- _(nome do integrante)_

## Objetivo
Divulgar a causa da ONG, apresentar seus projetos e mostrar como a comunidade pode ajudar
(voluntariado, doação de ração, lar temporário e divulgação).

## Páginas
| Arquivo | Conteúdo |
|---|---|
| `index.html` | Início: nome, causa, destaque visual e chamadas para participar |
| `sobre.html` | História, missão, público atendido, objetivos e painel de resultados |
| `projetos.html` | Três projetos: Pote Cheio, Lar Temporário e Patinha Saudável |
| `contato.html` | Formas de participar e formulário de contato (envio simulado) |

## Funcionalidades JavaScript
1. **Formulário validado** (`js/formulario.js`, página Contato): usa `addEventListener("submit")`
   e `preventDefault()`, lê os campos com `value` e `trim()`, valida nome (3+), e-mail
   (vazio/formato com `checkValidity()`), assunto (não vazio) e mensagem (10+), e mostra erro
   ou confirmação simulada no próprio HTML.
2. **Mostrar/ocultar resultados** (`js/script.js`, página Sobre): botão com
   `addEventListener("click")` que mostra/oculta o painel e troca o texto do botão.

## Estrutura de pastas
```
PataAmiga/
├── index.html, sobre.html, projetos.html, contato.html
├── css/estilos.css
├── js/script.js, js/formulario.js
├── img/ (logo e ilustrações em SVG)
└── README.md
```

## Como executar
1. Descompacte o arquivo `.zip`.
2. Abra `index.html` em qualquer navegador (dê dois cliques).
3. Navegue pelo menu. Não precisa de internet, servidor nem instalação.

## Créditos e fontes
- Todas as imagens são ilustrações SVG criadas pela própria equipe.
- Textos e números são fictícios, escritos para este projeto acadêmico.
- Este site é um protótipo acadêmico: não representa nenhuma ONG real, não envia dados e não recebe doações.
