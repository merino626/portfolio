# Portfolio — Luis Eduardo

Bilingual (English / Brazilian Portuguese) portfolio for a backend engineer. The design comes from the
[Code Canvas](https://github.com/merino626/code-canvas) prototype, rebuilt on Next.js with real content,
real screenshots and automatic language detection.

## Stack

- **Next.js 16** (App Router, static generation, `proxy.ts` for locale negotiation)
- **React 19**, **TypeScript**, **Tailwind CSS 4**
- **Motion** for reveal animations, **lucide-react** for icons
- `next/font` (Instrument Sans + JetBrains Mono), `next/image`, `next/og`

## Running

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run start      # serve the production build
```

## How languages work

Every page lives under `/en` or `/pt`. A request without a prefix (e.g. `/`) goes through
[`src/proxy.ts`](src/proxy.ts), which redirects to:

1. the language saved in the `NEXT_LOCALE` cookie (set when the visitor clicks EN/PT), otherwise
2. the best match from the browser's `Accept-Language` header, otherwise
3. **English** (the default).

Both pages are prerendered at build time, have `hreflang` alternates, canonical URLs, Open Graph
metadata, a generated OG image and JSON-LD (`Person`).

## Editing content

All copy lives in [`src/content`](src/content) — components never hold text.

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, email, GitHub, LinkedIn, resume path, **site URL**, featured repositories |
| `en.ts` / `pt.ts` | Every translated string: hero, stats, about, experience, projects, skills, contact |
| `media.ts` | Screenshot paths and pixel sizes (alt text is translated in `en.ts` / `pt.ts`) |
| `types.ts` | The `Content` type — both dictionaries must satisfy it, so a missing key fails the build |

To add a project, drop its images in `public/projects/<slug>/`, register them in `media.ts`, then add
the project to `work.items` or `projects.items` in **both** `en.ts` and `pt.ts`.

- `work.featured` is the full-width case study at the top of "Selected work" (currently Popmarq). Its
  `clips` become the demo-video tabs; `features` are the numbered product pillars.
- Any project can set `preview: video(shots.x.previewClip, alt)` to replace its card cover with a muted clip;
  the clip also opens first in the gallery. Clips only download and play while visible, and stay on the poster
  when the visitor prefers reduced motion. Cards, galleries and demo tabs tag every item as video or image.
- **Photo:** save a headshot as `public/profile/luis-eduardo.jpg` (portrait, roughly 4:5) and rebuild — the
  About section shows it automatically. Without the file, the section renders without a photo.

GIFs are served as MP4 with a poster frame for performance:

```bash
ffmpeg -i demo.gif -an -movflags +faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 26 demo.mp4
ffmpeg -i demo.gif -vframes 1 demo-poster.png
```

The resume served by the navbar is `public/resume/luis-eduardo-cv.pdf`.

## Project structure

```
src/
├── app/
│   ├── [locale]/          layout (metadata, fonts), page, opengraph-image
│   ├── sitemap.ts, robots.ts, icon.svg
│   └── globals.css        design tokens (graphite canvas, blue accent)
├── components/
│   ├── portfolio/         one component per section + ProjectCard (with screenshot gallery)
│   ├── ui/button.ts       shared button styles
│   └── icons.tsx          GitHub / LinkedIn marks
├── content/               profile, dictionaries, media inventory, types
├── i18n/                  locale config and Accept-Language negotiation
└── proxy.ts               locale redirect
public/
├── projects/              screenshots and clips per project
└── resume/                CV PDF
```

## Deploying

Designed for Vercel (the proxy needs a Node/Edge runtime, so a pure static export won't redirect `/`).
Before the first deploy, set `siteUrl` in `src/content/profile.ts` to the final domain — canonical
URLs, `hreflang`, the sitemap and Open Graph all derive from it.

The GitHub section fetches public data from the GitHub API at build time and revalidates every six
hours; if the API is unavailable it falls back to a link to the profile.
