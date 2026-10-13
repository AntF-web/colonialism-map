# Colonialism Expansion Flow Map

GitHub Pages-ready interactive Leaflet map with EN/FR language switcher.

## Important

This version uses **free Carto raster tiles** and does **not** require a MapTiler API key.

There should be no `MapTiler`, `api.maptiler.com`, or `key=` tile URL in `index.html`.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder:
   - `index.html`
   - `.nojekyll`
   - `README.md`
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Save.

Your site will be available at:

```txt
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## If you still see an API key error

Your GitHub site is probably still serving an older `index.html` using MapTiler.

Check this:

1. Open your GitHub repository.
2. Open `index.html`.
3. Use search for `maptiler`, `api.maptiler`, or `key=`.
4. If you find any of those, replace the file with this ZIP's `index.html`.
5. Commit the change and wait for GitHub Pages to redeploy.

Sometimes GitHub Pages takes a short moment to update after a commit. Refresh with Ctrl+F5 / Cmd+Shift+R.
