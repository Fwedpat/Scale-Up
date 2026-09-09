# Scale-Up Navigator

A static rewrite of the Scale-Up Navigator marketing site, designed for GitHub Pages.

## Preview locally

Run any static file server from the repository root, for example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Before launch

- Replace the temporary `mailto:hello@scaleupnavigator.com` links with the confirmed inbox or booking URL.
- Replace the existing CDN video and image sources in `index.html` with the final user-supplied assets if they should be hosted in this repository.
- Enable GitHub Pages from the repository's **Settings > Pages** screen with **GitHub Actions** as the source; `.github/workflows/pages.yml` deploys each push to `main`.
