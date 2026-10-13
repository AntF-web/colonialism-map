# Colonialism Expansion Flow Map — realistic vector edition

GitHub Pages-ready project.

This version does **not** use MapTiler, Mapbox, CARTO, OpenStreetMap raster tiles, or any API key.

It draws the basemap as Leaflet vector shapes from Natural Earth country geometry loaded from GitHub's raw CDN:

`https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson`

So it is a real country-outline vector basemap, not hand-drawn continent blobs.

## Upload to GitHub Pages

Upload these files to the root of your repository:

- `index.html`
- `.nojekyll`
- `README.md`

Then enable Pages: Settings → Pages → Deploy from branch → `main` → `/root`.

## Note

This version still needs internet access to load Leaflet from unpkg and the Natural Earth GeoJSON from GitHub raw. It needs **no map API key**.
