# Anthony Otoide | Engineering Portfolio

Live site: https://theworldwyrm.github.io/anthonyotoide.github.io/

Computer Engineering (Co-op) student at the University of Manitoba. The site covers my projects in embedded systems, remote sensing and machine learning, plus my experience and résumé.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Every push to `main` builds the site with Vite and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.
For this to work, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions** (one-time setup).

## Editing content

All the content (projects, experience, skills, leadership) is in the arrays at the top of `src/App.tsx`. Add a project by adding an entry to `PROJECTS`.
