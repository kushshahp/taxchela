# TaxChela Enhanced Website

This repository now hosts the static TaxChela experience extracted from the `tccc.zip` archive and enriched with motion design
and CSV-powered content sections suitable for deployment on Render or any static host.

## Project structure

```
/
├── assets/                # Logos, illustrative imagery, icons
├── css/style.css          # Global styles and animation definitions
├── data/                  # CSV sources for insights and service catalogue
├── js/script.js           # Motion, interactions, PapaParse + GSAP wiring
├── home/, sol/, read/,    # Route folders served directly as static pages
│   contri/, tc/, pp/
└── index.html             # Landing page with animated hero experience
```

## Local development

1. Install a static server if you do not already have one available:
   ```bash
   npm install -g serve
   ```
2. Launch the server from the project root so CSV files resolve correctly:
   ```bash
   serve .
   ```
3. Visit the printed localhost URL (typically `http://localhost:3000`).

The pages are plain HTML, so any alternative static server such as `python -m http.server` works as well.

## Deployment to Render

1. Push this repository to GitHub (or your preferred Git provider).
2. In Render, create a **Static Site**.
3. Set the build command to `null`/empty and the publish directory to `/` (root).
4. Enable auto-deploys so every push redeploys the latest assets.

Render will serve the site exactly as-is. Because there is no build step, deploys are near instantaneous.

## Creating the distributable archive

Some platforms reject pull requests that contain binary assets such as `.zip` archives. To avoid those
limits while still producing the requested `TaxChela_Enhanced_Website.zip`, generate the bundle locally
whenever you need to share or upload it:

```bash
zip -r TaxChela_Enhanced_Website.zip \
  assets contri css data home js pp read sol tc index.html README.md
```

The command mirrors the earlier packaged archive and can be run after every update. Add the resulting
file to releases or deployment portals as required, but keep it out of git commits to preserve PR compatibility.

## Managing CSV-powered content

- `/data/blogs.csv` feeds the Insights grid on `/read`.
- `/data/products.csv` and `/data/categories.csv` feed the Solutions catalogue on `/sol`.

To update content:

1. Edit the relevant CSV file(s) with your new records.
2. Commit and push the changes.
3. The next Render deploy (automatic if enabled) will serve the updated entries without touching HTML.

Ensure the site is always served from a web server (local or hosted) so the fetch requests for CSV files succeed.
