# Guidance Cyber Solutions — marketing site

Production website for [guidancecybersolutions.com](https://guidancecybersolutions.com). AI-powered HIPAA compliance for multi-location dental and specialty practices.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript** (strict), **Tailwind CSS v4**, and `next/font` Inter. Zero-config Vercel deploy.

## Run locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build & verify

```bash
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm format       # prettier --write
```

## Deploy

Push to GitHub and import the repo into [Vercel](https://vercel.com/new). No additional config needed.

Set the production environment variable in Vercel:

```
NEXT_PUBLIC_SITE_URL=https://guidancecybersolutions.com
```

`sitemap.xml`, `robots.txt`, and the OpenGraph image (`/opengraph-image`) all derive their absolute URLs from `NEXT_PUBLIC_SITE_URL` (with a sensible fallback in `lib/site.ts`).

## Project structure

```
app/                     # App Router pages, metadata, sitemap, robots, OG image, 404
  layout.tsx             # Inter font, Nav + Footer chrome, default <metadata>
  page.tsx               # Home — composes the section components
  pricing/page.tsx       # Pricing (tiers + FAQ accordion)
  security/page.tsx      # Security & Trust (5 numbered sections)
  not-found.tsx          # On-brand 404
  icon.svg               # Favicon — the navy + accent G mark
  opengraph-image.tsx    # Generated OG image (1200×630, navy + wordmark)
  sitemap.ts / robots.ts
  globals.css            # Tailwind v4 @theme tokens + base styles
components/
  layout/Nav.tsx         # Sticky 72px nav with mobile disclosure
  layout/Footer.tsx
  layout/Section.tsx     # Consistent max-w + padding wrapper
  sections/              # One file per home / pricing / security section
  ui/                    # Logo, Icon, Button, Card, Eyebrow, GridBackdrop, PageHead
lib/
  site.ts                # SITE constants, mailto: links
  copy.ts                # All marketing copy (single source of truth)
public/                  # Empty by design — favicon comes from app/icon.svg
```

## Where to update common things

| What | Where |
|---|---|
| Marketing copy (every page) | [lib/copy.ts](lib/copy.ts) |
| Email addresses, mailto subjects | [lib/site.ts](lib/site.ts) |
| Brand colors, type, shadows | `@theme` block in [app/globals.css](app/globals.css) |
| Logo SVG path data | [components/ui/Logo.tsx](components/ui/Logo.tsx) |
| Icon SVG path data | [components/ui/Icon.tsx](components/ui/Icon.tsx) |
| Favicon | [app/icon.svg](app/icon.svg) |
| OG image | [app/opengraph-image.tsx](app/opengraph-image.tsx) |
| Founders, subprocessors, compliance status | [lib/copy.ts](lib/copy.ts) |

The colors are exposed as Tailwind utility classes (`text-navy`, `bg-accent`, `border-border`, etc.) and as CSS custom properties (`var(--color-navy)`). To change a brand color globally, edit the single token in [app/globals.css](app/globals.css).

## Form handlers

Every CTA currently opens a `mailto:` link. Search the repo for `TODO(launch)` to find the spots that should swap to a real form endpoint before launch.

## Browser support

Latest two versions of Chrome, Safari, Firefox, Edge. The site has no IE/legacy fallbacks by design — Tailwind v4 and `next/font` already exclude those targets.

## Lighthouse

Desktop scores at `pnpm start`:

|  | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 |
| `/pricing` | 100 | 100 | 100 | 100 |
| `/security` | 100 | 100 | 100 | 100 |
| `/` (mobile) | 98 | 100 | 100 | 100 |

## License

Proprietary. © Guidance Cyber Solutions.
