# Colonialism Expansion Flow Map

A GitHub Pages-ready interactive Leaflet map showing a chronological overview of colonial expansion routes.

## Files

```txt
colonialism-map-pages/
├── index.html
├── README.md
└── .nojekyll
```

## Deploy on GitHub Pages

1. Create a new public GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch: `main`, folder: `/root`.
6. Save.

Your site will be available at:

```txt
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Edit content

Open `index.html` and edit:

- `places` for map points
- `rawRoutes` for timeline routes
- `fr` blocks for French translations

The map uses Leaflet and Carto basemaps loaded from public CDNs.
