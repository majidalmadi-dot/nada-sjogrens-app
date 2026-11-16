# Nada (ندى) — Sjögren's Companion

A bilingual (Arabic/English, RTL), non-medical, single-file installable PWA for people living with
Sjögren's syndrome — built on the same architecture as the Rafeeq IBD companion.

## What's inside
- `index.html` — the entire app (styles + markup + JS in one file). No build step.
- `manifest.webmanifest` — PWA install metadata.
- `sw.js` — offline-first service worker (bump `CACHE` version on every release).
- `icons/icon-192.png`, `icons/icon-512.png` — app icons.
- `website.html` — a simple marketing page that embeds the app in an iframe.

## Features
- **Today** — quick daily log + streak, weekly ESSPRI reminder, shortcuts.
- **Track** (via "Log now") — rate dry eyes, dry mouth, joint/muscle pain, and fatigue (0–10), optional
  self-reported trigger tags (association, not cause), optional note.
- **ESSPRI check-in** — the validated 3-item Sjögren's patient-reported index (dryness, fatigue, pain),
  implemented faithfully (0–10 per item, no interpretation or verdict).
- **Medications** — log what you take, mark "taken today"; never suggests doses or changes.
- **Reports** — 7/30/90-day trend charts (Chart.js), ESSPRI trend, medication log %, and a printable
  clinician summary (opens in a new tab → Print → Save as PDF). Nothing is uploaded.
- **Learn** — six short bilingual educational articles (what Sjögren's is, dry-eye/dry-mouth care,
  joint pain & fatigue lifestyle tips, possible triggers, and when to seek urgent care).
- **More** — language, theme (4 palettes), export/import your data as JSON, clear all data, about & disclaimer.

## Compliance
This app is strictly educational/descriptive — it does **not** diagnose, predict flares, recommend
treatment, or suggest medication doses. All health data is stored on-device (`localStorage`) only;
there is no backend in this build. See the in-app disclaimer (Learn tab and More tab).

## Run locally
Just open `index.html` in a browser, or serve the folder with any static file server:
```sh
npx serve .
```

## Deploy (GitHub → Vercel)
1. Push this folder to a new GitHub repo.
2. Import it in Vercel with Framework Preset = "Other" and Output Directory = `.`
   (or add a `vercel.json` with `{"outputDirectory": "."}`).
3. Every push to `main` auto-deploys. Bump the `CACHE` constant in `sw.js` each release so returning
   users get the update.

## Rename / rebrand
All user-facing strings live in the `I18N` object near the top of the `<script>` in `index.html` —
edit `brand`/`tagline` there (and swap `icons/*.png`) to rebrand.
