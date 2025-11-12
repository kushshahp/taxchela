# Taxchela Studio

A cinematic, animation-rich marketing site for the Taxchela finance studio. Built with [Vite](https://vitejs.dev/) + React, Tailwind CSS, and Framer Motion so it can be hosted on [Render](https://render.com/) or any modern static host.

## Local development

```bash
npm install
npm run dev
```

The development server will be available at `http://localhost:5173`.

## Production build

```bash
npm run build
```

The production-ready files will be emitted to `dist/`. Preview the build locally with:

```bash
npm run preview
```

## Deploying to Render

1. Push this repository to GitHub (or another Git provider that Render supports).
2. Create a new **Web Service** in Render and connect the repo.
3. Use the following settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview -- --host 0.0.0.0 --port $PORT`
   - **Node version**: `18` (configured in `render.yaml`)
4. Deploy. Render will serve the static build through Vite’s preview server.

Alternatively, you can deploy as a **Static Site** on Render using `npm run build` as the build command and `dist` as the publish directory.

## Design system

- **Animations**: Driven by Framer Motion with custom easing, parallax layers, tilt-reactive galleries, and continuous marquee effects.
- **Styling**: Tailwind CSS with bespoke gradients, glass panels, and motion-friendly typography.
- **Components**: Modular hero, services, case studies, process timeline, testimonials, and contact CTA sections.

## License

MIT
