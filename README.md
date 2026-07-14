# Md Anas — Portfolio

A React + Vite + Tailwind portfolio, styled as a code editor: sections are "files" (`about.tsx`,
`projects.tsx`, `skills.json`, `achievements.log`, `contact.md`) with a tab bar that highlights the
section in view, syntax-highlighted content blocks, and a mailto-based contact form (no backend needed).

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static output lands in `dist/`.

## Deploy

This is a static Vite app, so it deploys the same way as your other projects:

- **Vercel**: import the repo, framework preset "Vite", build command `npm run build`, output
  directory `dist`.
- **Render**: static site, build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, then push the `dist/` folder to a `gh-pages` branch
  (or use the `gh-pages` npm package).

## Editing your content

All resume content lives in one place: `src/data/resumeData.js`. Update your projects, skills,
achievements, certifications, and contact details there — the components render straight from it,
so you won't need to touch JSX to keep this up to date.

## Structure

```
src/
  data/resumeData.js     ← all your content
  components/
    TabBar.jsx            ← sticky nav, scroll-spy highlighting
    Hero.jsx               ← about section
    Projects.jsx
    Skills.jsx
    Achievements.jsx        ← achievements + certifications + positions
    Contact.jsx
  App.jsx
  index.css
```
