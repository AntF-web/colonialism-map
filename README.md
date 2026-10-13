# Colonialism Expansion Flow Map — Realistic local dark map

GitHub Pages-ready project.

This version uses a local vector world layer in `assets/world-vectors.js` instead of online basemap tiles.
It includes land shapes, coastlines, country borders, and grid lines, styled as a dark map.

No MapTiler, Mapbox, CARTO, or OpenStreetMap tile API key is required.

## Files

```txt
index.html
README.md
.nojekyll
assets/world-vectors.js
```

## Publish on GitHub Pages

1. Upload all files and the `assets` folder to the root of your repository.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/root`.
5. Hard refresh the live page after deployment.

## Important

If you still see “API Key required”, GitHub Pages is still serving an older `index.html`.
Open the live page source and search for `maptiler`, `mapbox`, `cartocdn`, `tileLayer`, or `key=`.
This version does not use those strings for a basemap.
