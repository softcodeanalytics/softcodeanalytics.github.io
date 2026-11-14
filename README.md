# Softcode Analytics website

React + Vite single-page site.

## Run it locally

```
npm ci
npm run dev
```

## Deploy

**GitHub Pages.** `.github/workflows/deploy-pages.yml` builds the site and publishes it on every push to `main`.
One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The build is set up for a site served from the root of its address (for example `https://softcodeanalytics.github.io/` or a custom domain).
Serving it from a sub-folder such as `https://<owner>.github.io/<repo>/` needs `base` set in `vite.config.js` and a router `basename`.

**Vercel** keeps working unchanged (`vercel.json`).

### Adding a page

The site is a single-page app, so GitHub Pages needs a copy of `index.html` for each page address.
`scripts/spa-fallback.mjs` makes these copies after every build, plus a `404.html` for unknown addresses.
When you add a route in `src/main.jsx`, add its path to the `PAGES` list in that script.
