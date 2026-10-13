# Colonialism Expansion Flow Map — GitHub Pages

This build uses the standard **OpenStreetMap raster tile server**:

`https://tile.openstreetmap.org/{z}/{x}/{y}.png`

It contains **no MapTiler, Mapbox, Carto, Stadia, Thunderforest or other API-key based basemap**.

## Publish

Upload these three files directly to the root of your GitHub repository:

- `index.html`
- `.nojekyll`
- `README.md`

Then go to **Settings → Pages → Deploy from a branch → main → /(root)**.

If the published page still says **API Key required**, GitHub Pages is serving a different/older file. Open the live page source and search for `maptiler`. If it appears, replace the repository-root `index.html` with the one in this ZIP and redeploy.
