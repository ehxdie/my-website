# Edidiong Ephraim · portfolio

Personal site: experience, client work, projects and the Sirius case study.

React 18 + TypeScript + Vite + Tailwind. All content lives in `src/data.ts`; screenshots are in `public/work/`.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and build to dist/
```

Deployed on Vercel from `master` (settings in `vercel.json`: Vite, output `dist`, every path served by `index.html`,
so old links such as `/my-website/`, `/AboutPage` and `/ContactPage` still work).
