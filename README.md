# DISRAELI.EXE — Custom Browser Start Page

A personal browser start page with a synthwave/retrowave aesthetic, pixel art style, and daily philosopher quotes.

## Features

- **Live clock & date** in Portuguese, with contextual greeting (Bom dia / Boa tarde / Boa noite)
- **Synthwave wallpaper** — animated perspective grid, retrowave sun, twinkling stars
- **Daily philosopher quotes** — rotates every day, inspired by the tone of *Classroom of the Elite*
- **App shortcuts** — YouTube, YT Music, GitHub, Gmail, ChatGPT, Claude, MakerWorld, WhatsApp, Instagram, Lends, Canva, Google Classroom
- **Floating YouTube Music player** — draggable, minimizable Win95-style window
- **Pixel art aesthetic** — Press Start 2P font, Win95 pixel borders, CRT scanline overlay
- **Pure dark mode** — no dependencies, single HTML file

## Preview

> Synthwave sky · animated grid floor · pixel UI panel · floating music player

## Setup

1. Download `startpage.html`
2. In **Brave** (or any Chromium browser): go to `Settings → On startup → Open a specific page`
3. Add the local file path, e.g.: `file:///C:/Users/YourName/Documents/Coding/startpage.html`

## Customization

All customization is done directly in the HTML file:

| What | Where |
|---|---|
| Music playlist | `src` attribute of the `<iframe>` inside `.player-body` |
| App shortcuts | `.shortcuts` div — add/remove `<a class="shortcut pixel-box">` blocks |
| Quotes | `QUOTES` array in the `<script>` section |
| Your name | `getGreeting()` function and `.titlebar-title` text |
| Colors | `:root` CSS variables at the top of `<style>` |

## Stack

- HTML / CSS / Vanilla JS — no frameworks, no dependencies
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) — Google Fonts
- YouTube embed API for the music player
