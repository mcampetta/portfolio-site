# Martin Campetta Portfolio

Static portfolio site built with Next.js App Router and Tailwind CSS, configured for static export only.

## Proposed Structure And Visual Direction

The site uses a restrained dark-neutral palette, strong spacing, and typography that feels technical without becoming sterile. The homepage is a selective one-page overview for hiring managers, while featured projects are structured so each one can grow into a dedicated static detail page later.

## Stack

- Next.js 16 App Router
- Tailwind CSS 4
- TypeScript
- Static export via `output: "export"`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Build And Export

Run:

```bash
npm run build
```

Next.js writes the static site to the `out/` directory. That folder is ready for static hosting on platforms or servers that can serve plain HTML, CSS, JS, and assets.

## Where To Edit Content

Primary content file:

- `data/site.ts`

Update the following there:

- `siteUrl` for your production domain
- Name, headline, intro text
- About copy
- Experience entries
- Featured projects
- Project links, screenshots, tags, and case-study summaries
- More on GitHub link
- Technical focus items
- Email, LinkedIn, GitHub, and resume link

## Featured Project Structure

Each featured project in `data/site.ts` supports:

- `slug`
- `name`
- `summary`
- `caseStudy`
- `tags`
- `github`
- `demo`
- `image`
- `detailTitle`
- `detailPoints`

The homepage uses this data for curated project cards, and `app/projects/[slug]/page.tsx` uses the same data for dedicated detail pages.

## Assets To Replace

- `public/resume.doc`
  Replace if you want a newer public resume file while keeping the current download link.
- `public/icon.svg`
  Replace if you want a custom favicon.
- `public/og-image.svg`
  Replace if you want a custom social sharing image.

## Structure

- `app/layout.tsx`
  Root layout, metadata, navbar, and footer
- `app/page.tsx`
  Homepage composition
- `app/projects/[slug]/page.tsx`
  Static project detail pages
- `components/*`
  Reusable portfolio sections
- `data/site.ts`
  Centralized content
- `app/globals.css`
  Global theme, typography, spacing, and interaction styling

## Static Hosting Notes

- This project uses `output: "export"` in `next.config.ts`
- There is no backend, API route, CMS, or database
- Deploy the generated `out/` folder to any static host
- GitHub Pages deployment for the `portfolio-site` repository is configured in `.github/workflows/deploy.yml`
- Production builds use the `/portfolio-site` base path automatically for GitHub Pages

## Sources Used For Setup Decisions

- Next.js static export guide: https://nextjs.org/docs/app/guides/static-exports
- Tailwind CSS Next.js guide: https://tailwindcss.com/docs/guides/nextjs
