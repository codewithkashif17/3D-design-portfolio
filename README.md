# Kashi Bangash — 3D Portfolio (React + Tailwind + Three.js)

A full  cube portfolio as a
component-based React app: Tailwind for styling, Framer Motion for UI
animation, and React Three Fiber for an ambient WebGL background (drifting
gold particles + a floating wireframe ring). The signature "rotating cube"
layout from the original is preserved and rebuilt with React state instead
of manual DOM class toggling.

## Theme

Dark obsidian background (`#0b0d12` / `#12151d`) with a gold accent system
(`#d4af37` primary, `#f2cf6b` glow) — display type in Cormorant Garamond,
body type in Inter, data/labels in JetBrains Mono.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Adding your images

Drop your photo and project screenshots into `public/` and point to them
from `src/data/profile.js` (`avatar`) and `src/data/portfolio.js`
(`works[].image`) — e.g. `public/picofme.png` → `./picofme.png`.

## Folder structure

```
portfolio-3d/
├── index.html
├── package.json
├── tailwind.config.js        # dark/gold design tokens
├── postcss.config.js
├── vite.config.js
├── public/                   # static assets (avatar, project images)
└── src/
    ├── main.jsx
    ├── App.jsx                # top-level state: active section, intro timing
    ├── index.css              # Tailwind layers + cube 3D CSS
    ├── data/                  # all editable content, separate from UI
    │   ├── profile.js
    │   ├── resume.js
    │   └── portfolio.js
    └── components/
        ├── layout/
        │   ├── Navbar.jsx      # floating pill nav, active-tab indicator
        │   └── CubeStage.jsx   # orchestrates the 4-face cube rotation
        ├── three/
        │   └── AmbientScene.jsx # R3F canvas: gold particles + floating ring
        ├── sections/
        │   ├── Home.jsx
        │   ├── About.jsx
        │   ├── Resume.jsx      # internal tabs: Experience / Skills / Education
        │   ├── Portfolio.jsx   # internal tabs: Works / Services
        │   └── Contact.jsx     # controlled form, front-face overlay
        └── ui/
            ├── TabSwitcher.jsx
            └── SocialIcons.jsx
```

## How the cube works

`CubeStage` positions four sections (`Home`, `About`, `Resume`, `Portfolio`)
as faces of a CSS 3D cube using the same `translate/rotateY` math as the
original stylesheet, then animates the stage's `rotateY` with Framer Motion
whenever the active nav index changes. `Contact` shares the cube's front
face (no transform) and is faded in/out via opacity + visibility, matching
the original's overlay behaviour when its nav item is selected.

## Extending

- Swap `AmbientScene`'s particle count / geometry for something heavier if
  you want a more dramatic background (mind mobile GPU budgets).
- Each section reads from `src/data/*` — update content there, not inside
  the components.
- `tailwind.config.js` is the single source of truth for the gold/obsidian
  palette; change tokens there to re-theme everything at once.
