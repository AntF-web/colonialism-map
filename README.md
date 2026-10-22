# Colonialism Map — English / Français / Español

GitHub Pages-ready historical flow map with a **local, detailed dark vector world basemap** and three complete interface/data translations (EN / FR / ES).

## Publish on GitHub Pages
1. Create a public GitHub repository.
2. Upload **all the files and the `assets/` folder** from this project into the repository root.
3. In **Settings → Pages**, select **Deploy from a branch** → `main` → `/(root)`.
4. Visit `https://YOUR-USERNAME.github.io/YOUR-REPO/` after GitHub finishes deployment.

## Features
- Language selector EN / FR / ES, with choice saved in the browser when allowed.
- Translated timeline titles, descriptions, period labels, context notes, impact notes, city names and popups.
- Play/pause, route scrubbing, city filters, animated flows.
- Local dark world geography (`assets/world-vectors.js`) with land, coasts and country outlines.
- **No map service API key**: no MapTiler, Mapbox, CARTO or remote tile imagery.
- The Leaflet library (CSS and JavaScript) is loaded from unpkg, so an Internet connection is still needed unless Leaflet is bundled locally.

## Files
- `index.html`: page, timeline, multilingual UI and maps.
- `assets/world-vectors.js`: local detailed world geometry.
- `assets/vector-basemap.js`: Leaflet vector styling.
- `assets/es-translations.js`: all Spanish data strings.
- `.nojekyll`: GitHub Pages compatibility.

### Historical note
The routes are schematic connections between imperial centers and representative cities, not the exact geographic boundaries or years of every colony. Some decades and centuries are approximate. The map is an educational overview, not a substitute for more detailed historical sources.
