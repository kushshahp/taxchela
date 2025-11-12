# TaxChela immersive website

A Render-friendly marketing experience for **taxchela.com** rebuilt with Vite + React. The site mirrors the
motion-rich storytelling from the client brief, respects the Oswald brand typography, and hydrates solutions and insights
directly from CSV sources bundled in `public/data`.

## Highlights

- **Vite + React** single-page application with animated storytelling powered by Framer Motion.
- **Oswald + Inter** typography pairing with gradients derived from the official TaxChela logo.
- **CSV-driven content** for solutions (`public/data/products.csv`, `public/data/categories.csv`) and insights
  (`public/data/blogs.csv`) parsed at runtime with PapaParse.
- **Render-ready configuration** using the default Vite build/preview commands declared in `render.yaml`.

## Project structure

```
public/
  assets/               # Logo marks and supporting imagery served statically
  data/                 # CSV datasets consumed by the React components
src/
  components/           # Reusable motion-driven sections for the landing page
  App.jsx               # Page composition and scroll parallax background
  main.jsx              # React entry point
  styles.css            # Tailwind entry with Oswald + Inter imports
index.html              # Vite HTML entrypoint
render.yaml             # Render deployment configuration
```

## Getting started

```bash
npm install
npm run dev
```

Visit the printed localhost URL (usually `http://localhost:5173`) to explore the experience. The CSV fetches require the
Vite dev server or any HTTP server; opening `index.html` directly from the filesystem will block the requests.

## Building for production

```bash
npm run build
```

The compiled assets live in `dist/`. To preview the production build locally before shipping to Render, run:

```bash
npm run preview
```

## Updating content

- Add or edit rows in `public/data/products.csv` and `public/data/categories.csv` to refresh the solutions catalogue.
- Update `public/data/blogs.csv` to refresh the Insights grid.
- Drop new imagery into `public/assets/` and reference it from the CSV rows or components.

Deploying to Render is as simple as pushing to the repository. `render.yaml` already instructs Render to install
dependencies, run the Vite build, and serve the compiled site via `vite preview` on the correct port.
