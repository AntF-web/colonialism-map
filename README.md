# Colonialism Expansion Flow Map — Dark GitHub Pages Version

This is a static GitHub Pages project.

## Files

- `index.html` — the interactive bilingual EN/FR colonialism timeline map
- `.nojekyll` — keeps GitHub Pages from processing the project with Jekyll

## Basemap

This version uses the dark CARTO basemap:

```js
https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
```

It does **not** use MapTiler or Mapbox and does **not** require an API key.

If your live GitHub page still says "API key required", GitHub Pages is probably still serving an older `index.html`. Replace the root `index.html`, commit the change, then hard refresh the browser.
