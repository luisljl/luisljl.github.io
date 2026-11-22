# luisjl.com

Web personal de **Luis JL**, desarrollador de software. Una sola página estática (`index.html`, sin dependencias ni
compilación) con estilo neobrutalista: amarillo, bordes negros gruesos y sombras duras.

Los juegos no se listan aquí: la web enlaza a [jlgamesdev.com](https://jlgamesdev.com), donde están todos.

## Editar

- Textos y secciones: `index.html`. Los colores y tamaños están arriba, en las variables de `:root`.
- Tecnologías: la lista `.chips` de `index.html`; los logos están en `assets/img/logos/`.
- Avatar: SVG dibujado dentro de `index.html` (no se usa foto).

## Publicar

GitHub Pages publica la rama `master` tal cual. El dominio `luisjl.com` está en el archivo `CNAME` y sus DNS en
Cloudflare (registros de GitHub Pages en gris).

```bash
git add -A
git commit -m "mensaje"
git push
```
