# luisjl.com

Web personal de **Luis JL** — Desarrollador de Software.

## 📦 Añadir un proyecto

Los proyectos se definen en `projects.json` con la siguiente estructura:

```json
{
  "title": "Nombre del proyecto",
  "description": "Descripción breve de qué hace el proyecto, tecnologías, etc.",
  "image": "https://ejemplo.com/imagen.jpg",
  "tags": ["Angular", ".NET", "TypeScript"],
  "links": [
    { "type": "github", "url": "https://github.com/tu-usuario/repo" },
    { "type": "web", "url": "https://tu-web.com" },
    { "type": "steam", "url": "https://store.steampowered.com/app/123" }
  ]
}
```

### Tipos de link disponibles

| Tipo | Icono | Label |
|------|-------|-------|
| `steam` | Steam | Steam |
| `github` | GitHub | GitHub |
| `web` / `website` | 🌐 | Web |
| `youtube` | YouTube | YouTube |
| `docker` | Docker | Docker Hub |
| `npm` | npm | npm |
| `itchio` | Itch.io | Itch.io |
| `twitter` | X | X |
| `discord` | Discord | Discord |
| `playstore` | Google Play | Google Play |
| `appstore` | App Store | App Store |

### Después de editar `projects.json`

Por temas de CORS, los datos están embebidos en el HTML. Después de modificar `projects.json`, hay que copiar el array actualizado al `projectsData` en `index.html`. Busca esta sección:

```js
const projectsData = [];
```

Y sustitúyela por el contenido de `projects.json`.

> 💡 **Alternativa**: Si prefieres que cargue automáticamente desde el JSON (funciona en GitHub Pages pero no en local con `file://`), cambia la función `loadProjects()` para que haga `fetch('projects.json')`.

## 🚀 Despliegue en GitHub Pages

```bash
git add -A
git commit -m "mensaje descriptivo"
git push
```

El dominio `luisjl.com` ya está configurado con GitHub Pages vía `CNAME`.
