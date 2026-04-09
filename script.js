// ── Clock & Date ──
const DAYS   = ['DOMINGO','SEGUNDA','TERCA','QUARTA','QUINTA','SEXTA','SABADO'];
const MONTHS = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];

function pad(n) { return String(n).padStart(2, '0'); }

function getGreeting(h) {
  if (h >= 6  && h < 12)   return '> BOM DIA, DISRAELI_';
  if (h >= 12 && h < 17.5) return '> BOA TARDE, DISRAELI_';
  return '> BOA NOITE, DISRAELI_';
}

function update() {
  const now = new Date();
  const h   = now.getHours();
  const m   = now.getMinutes();

  document.getElementById('clock').innerHTML =
    `${pad(h)}<span class="blink">:</span>${pad(m)}`;

  document.getElementById('greeting').textContent = getGreeting(h + m / 60);

  const day  = DAYS[now.getDay()];
  const date = now.getDate();
  const mon  = MONTHS[now.getMonth()];
  const yr   = now.getFullYear();
  document.getElementById('date').textContent = `${day}  ${pad(date)}/${mon}/${yr}`;
}

update();
setInterval(update, 1000);

// ── Daily Quotes ──
const QUOTES = [
  { text: "O homem está condenado a ser livre.", author: "— Jean-Paul Sartre" },
  { text: "Aquele que tem um porquê para viver suporta quase qualquer como.", author: "— Friedrich Nietzsche" },
  { text: "Não há nada permanente exceto a mudança.", author: "— Heráclito" },
  { text: "O forte não é aquele que nunca cai, mas aquele que se levanta todas as vezes.", author: "— Confúcio" },
  { text: "É mais fácil enganar as pessoas do que convencê-las de que foram enganadas.", author: "— Mark Twain" },
  { text: "O homem que move montanhas começa carregando pequenas pedras.", author: "— Confúcio" },
  { text: "A maioria dos homens leva vidas de desespero silencioso.", author: "— Henry David Thoreau" },
  { text: "Conhece-te a ti mesmo.", author: "— Sócrates" },
  { text: "O que não me destrói, me fortalece.", author: "— Friedrich Nietzsche" },
  { text: "Os fins justificam os meios.", author: "— Nicolau Maquiavel" },
  { text: "A vida não examinada não vale a pena ser vivida.", author: "— Sócrates" },
  { text: "Deus está morto. E nós o matamos.", author: "— Friedrich Nietzsche" },
  { text: "A ignorância é a noite da mente, uma noite sem lua e sem estrelas.", author: "— Confúcio" },
  { text: "O homem é a medida de todas as coisas.", author: "— Protágoras" },
  { text: "Prefiro morrer de pé a viver de joelhos.", author: "— Emiliano Zapata" },
  { text: "Se você conhece o inimigo e conhece a si mesmo, não precisa temer o resultado de cem batalhas.", author: "— Sun Tzu" },
  { text: "A suprema excelência é submeter o inimigo sem lutar.", author: "— Sun Tzu" },
  { text: "Toda a sabedoria humana se resume em duas palavras: esperar e esperançar.", author: "— Alexandre Dumas" },
  { text: "O homem é um lobo para o homem.", author: "— Thomas Hobbes" },
  { text: "Felicidade não é algo pronto. Ela vem de suas próprias ações.", author: "— Dalai Lama" },
  { text: "Agir sem pensar é atirar sem mirar.", author: "— Edmund Burke" },
  { text: "O silêncio é o sono que alimenta a sabedoria.", author: "— Francis Bacon" },
  { text: "Só sei que nada sei.", author: "— Sócrates" },
  { text: "A crueldade não é fraqueza; a misericórdia mal aplicada é.", author: "— Nicolau Maquiavel" },
  { text: "Não chores porque acabou, sorri porque aconteceu.", author: "— Gabriel García Márquez" },
  { text: "O tempo é o único capital de quem só tem inteligência como fortuna.", author: "— Honoré de Balzac" },
  { text: "Penso, logo existo.", author: "— René Descartes" },
  { text: "A liberdade de um acaba onde começa a do outro.", author: "— Immanuel Kant" },
  { text: "A maior glória não está em nunca cair, mas em se levantar cada vez que se cai.", author: "— Oliver Goldsmith" },
  { text: "Não tema o homem que praticou dez mil golpes diferentes. Tema o homem que praticou um único golpe dez mil vezes.", author: "— Bruce Lee" },
  { text: "A ambição é o último refúgio do fracasso.", author: "— Oscar Wilde" },
  { text: "O universo não nos deve nada. Tudo que conquistamos vem da nossa força de vontade.", author: "— Arthur Schopenhauer" },
  { text: "Aquele que luta com monstros deve tomar cuidado para não se tornar também um monstro.", author: "— Friedrich Nietzsche" },
  { text: "Não existe acaso; existe apenas a necessidade que ainda não foi compreendida.", author: "— Marie Curie" },
  { text: "A verdadeira medida de um homem é o que ele faz quando ninguém está olhando.", author: "— John Wooden" },
  { text: "A dor é inevitável. O sofrimento é opcional.", author: "— Buda" },
  { text: "Seja a mudança que você quer ver no mundo.", author: "— Mahatma Gandhi" },
  { text: "O coração tem razões que a própria razão desconhece.", author: "— Blaise Pascal" },
];

function getDailyQuote() {
  const now   = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day   = Math.floor((now - start) / 86400000);
  return QUOTES[day % QUOTES.length];
}

const q = getDailyQuote();
document.getElementById('quoteText').textContent   = `"${q.text}"`;
document.getElementById('quoteAuthor').textContent = q.author;

// ── Petals ──
const petalsEl = document.getElementById('petals');
for (let i = 0; i < 45; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  const size = (5 + Math.random() * 7).toFixed(0);
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    --size: ${size}px;
    --drift: ${(Math.random() * 260 - 130).toFixed(0)}px;
    --duration: ${(10 + Math.random() * 14).toFixed(1)}s;
    --delay: -${(Math.random() * 18).toFixed(1)}s;
    --rotate: ${(Math.random() * 360).toFixed(0)}deg;
  `;
  petalsEl.appendChild(p);
}

