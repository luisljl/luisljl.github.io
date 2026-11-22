# luisjl.com

Web personal de **Luis JL**, desarrollador de software. Una sola página estática (`index.html`, sin dependencias ni
compilación) con estilo neobrutalista: amarillo, bordes negros gruesos y sombras duras.

Los juegos no se listan aquí: la web enlaza a [jlgamesdev.com](https://jlgamesdev.com), donde están todos.

## Editar

- Textos y secciones: `index.html`. Los colores y tamaños están arriba, en las variables de `:root`.
- Tecnologías: la lista `.chips` de `index.html`; los logos están en `assets/img/logos/`.
- Avatar: SVG dibujado dentro de `index.html` (no se usa foto).
- Modo oscuro: sigue al sistema; el botón de la barra lo cambia y lo recuerda en el navegador (`localStorage`).
  Los colores de cada modo son las variables `--bg`, `--text`, `--surface`, `--edge` y `--drop`.
- Imagen al compartir (`assets/og.png`, 1200×630): una captura de un HTML con el mismo estilo y el avatar, hecha con
  Chrome sin ventana. Si cambias el avatar, vuelve a sacarla para que coincidan.

## «Ahora mismo»

La sección enseña el juego destacado de jlgamesdev.com leyendo `assets/now.json`. Ese archivo lo escribe
`.github/ahora.mjs`, que lanza cada día la tarea `.github/workflows/ahora.yml` (también a mano desde la pestaña
Actions) y que solo hace commit si algo cambió. El script lee `assets/js/games.js` de la web del estudio en un
entorno aislado, para no cargar aquí ni su código ni sus estadísticas de visitas. Sin juego, la sección no sale.

GitHub pausa las tareas programadas de un repo sin actividad en 60 días; si pasa, se reactiva en Actions.

## Publicar

GitHub Pages publica la rama `master` tal cual. El dominio `luisjl.com` está en el archivo `CNAME` y sus DNS en
Cloudflare (registros de GitHub Pages en gris).

```bash
git add -A
git commit -m "mensaje"
git push
```
