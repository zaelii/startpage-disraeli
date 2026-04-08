# DISRAELI.EXE — Página Inicial Personalizada do Navegador

Página inicial pessoal para o navegador com estética synthwave/retrowave, visual pixel art e frases diárias de filósofos.

## Funcionalidades

- **Relógio e data ao vivo** em português, com saudação contextual (Bom dia / Boa tarde / Boa noite)
- **Wallpaper synthwave** — grid animado em perspectiva, sol retrowave, estrelas piscando
- **Frases diárias de filósofos** — rotaciona a cada dia, inspirado no tom de *Classroom of the Elite*
- **Atalhos de apps** — YouTube, YT Music, GitHub, Gmail, ChatGPT, Claude, MakerWorld, WhatsApp, Instagram, Lends, Canva, Google Classroom
- **Player flutuante de música** — janela estilo Win95, arrastável e minimizável
- **Estética pixel art** — fonte Press Start 2P, bordas pixel Win95, overlay de scanlines CRT
- **Modo escuro puro** — sem dependências externas

## Preview

> Céu synthwave · grid animado no chão · painel pixel · player de música flutuante

## Configuração

1. Baixe os arquivos `index.html`, `style.css` e `script.js`
2. No **Brave** (ou qualquer navegador Chromium): vá em `Configurações → Ao iniciar → Abrir uma página específica`
3. Adicione o caminho local do arquivo, ex.: `file:///C:/Users/SeuNome/Documents/Coding/index.html`

## Personalização

Toda a personalização é feita diretamente nos arquivos:

| O quê | Onde |
|---|---|
| Playlist de música | Atributo `src` do `<iframe>` dentro de `.player-body` em `index.html` |
| Atalhos de apps | Div `.shortcuts` — adicione/remova blocos `<a class="shortcut pixel-box">` em `index.html` |
| Frases | Array `QUOTES` em `script.js` |
| Seu nome | Função `getGreeting()` e texto `.titlebar-title` em `script.js` e `index.html` |
| Cores | Variáveis CSS `:root` no topo de `style.css` |

## Stack

- HTML / CSS / Vanilla JS — sem frameworks, sem dependências
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) — Google Fonts
- YouTube embed API para o player de música
