// Runs after `vite build` so the site works on static hosts such as GitHub Pages.
//
// The site is a single-page React app: every page is drawn by dist/index.html.
// Vercel sends every address to that page (see vercel.json), but GitHub Pages
// only serves files that exist. Without this step, opening or refreshing
// /our-profile on GitHub Pages shows GitHub's "404 File not found" page.
//
// This script copies index.html to:
//   - one folder per page listed below, so /our-profile loads normally, and
//   - 404.html, so any other address shows the site's own error page.
//
// When you add a page to the router in src/main.jsx, add its path here too.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PAGES = ["our-profile"];

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const index = join(dist, "index.html");

if (!existsSync(index)) {
  console.error("spa-fallback: dist/index.html not found; run `vite build` first.");
  process.exit(1);
}

for (const page of PAGES) {
  mkdirSync(join(dist, page), { recursive: true });
  copyFileSync(index, join(dist, page, "index.html"));
}
copyFileSync(index, join(dist, "404.html"));

console.log(`spa-fallback: wrote 404.html and ${PAGES.length} page folder(s) to dist/`);
