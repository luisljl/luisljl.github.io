// Escribe assets/now.json con el juego destacado de jlgamesdev.com, para la sección «Ahora mismo» de luisjl.com.
//
// Los datos de la web del estudio están en assets/js/games.js, que además manda visitas a sus estadísticas.
// Por eso no se carga en el navegador: se ejecuta aquí, aislado y con navigator/document de mentira,
// y solo se guarda lo que la portada necesita. Lo lanza .github/workflows/ahora.yml una vez al día.
import fs from 'node:fs';
import vm from 'node:vm';

const STUDIO = 'https://jlgamesdev.com/';
const OUT = new URL('../assets/now.json', import.meta.url);

const code = await (await fetch(STUDIO + 'assets/js/games.js', { headers: { 'User-Agent': 'luisjl-ahora' } })).text();
const noop = () => {};
const sandbox = {
  window: {},
  navigator: { sendBeacon: noop },
  document: { referrer: '', addEventListener: noop },
  location: { search: '', pathname: '/', hostname: 'luisjl.com' },
  URLSearchParams, URL, console: { log: noop, warn: noop, error: noop }
};
vm.runInNewContext(code, sandbox, { timeout: 2000 });

const es = (v) => (v && typeof v === 'object' ? (v.es || v.en || '') : (v || ''));
const games = Array.isArray(sandbox.window.GAMES) ? sandbox.window.GAMES : [];
const g = games.find((x) => x.featured) || games.find((x) => x.status !== 'released') || games[0];

const game = g && g.slug && g.title ? {
  slug: String(g.slug),
  title: es(g.title),
  status: String(g.status || ''),
  release: es(g.release),
  tagline: es(g.tagline),
  cover: g.cover ? new URL(g.cover, STUDIO).href : '',
  url: STUDIO + 'es/' + encodeURIComponent(g.slug),
  steam: g.links && /^https:\/\/store\.steampowered\.com\//.test(g.links.steam || '') ? g.links.steam : ''
} : null;

const next = JSON.stringify({ game }, null, 2) + '\n';
const before = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
if (next !== before) fs.writeFileSync(OUT, next);
console.log(game ? `Ahora mismo: ${game.title} (${game.status})` : 'Sin juego destacado', next === before ? '— sin cambios' : '— actualizado');
