# caitlinkchen.com

Personal site. Static, no database, no CMS. Built with [Astro](https://astro.build);
deploys to any static host.

Design is modelled on [aldenteparis.com](https://www.aldenteparis.com/): white ground,
slim sticky masthead, oversized warm serif, full-bleed image bands with overlaid titles,
outlined pill buttons, and a giant wordmark above the footer.

Type is Fraunces (display) and Geist (UI), both self-hosted variable fonts — the
originals on the reference site (Windsor, Monument Grotesk) are commercial licences,
so these are the closest free equivalents.

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # -> dist/
pnpm preview  # serve dist/ locally
```

Node 24, pnpm 11.

## Adding things

**A project.** Drop a markdown file into `src/content/projects/`. The filename becomes
the URL (`euler.md` -> `/work/euler`). Frontmatter:

```yaml
---
title: Investigations of Variations on a Theme of Euler
order: 2                        # position in the index; lower runs first
category: Numerical Methods     # kicker above the title
summary: One or two sentences, set large next to the body copy.
year: '2023'                    # optional
image: euler.png                # optional; a file in src/assets/work/
imageAlt: What the image shows  # optional
imageDecorative: false          # true = atmospheric photo, so no caption, empty alt
pdf: /pdf/euler.pdf             # optional; a file in public/pdf/
repo: https://github.com/...    # optional
tools: ['Euler', 'RK4']         # optional
---

Body copy goes here, in markdown.
```

Anything below the frontmatter is the body. Nothing else needs editing — the index,
the detail page, the next-project link and the sitemap all pick it up.

**An artwork.** Put the image in `src/assets/art/`, then add a line to
`src/data/art.ts`:

```ts
{ file: 'art-13.jpg', col: '', alt: 'What the picture shows' },
```

`title`, `medium` and `year` are optional — add them and they appear in the caption.
They are deliberately blank right now: the old Wix site listed no titles, so none
were invented. Fill them in when you want them.

**Images generally.** Anything in `src/assets/` is resized, converted to WebP and
given a responsive `srcset` at build time. Put the original in; don't hand-optimise.
Sources wider than ~2600px are worth capping first — nothing needs more than that.

Files in `public/` are served as-is (PDFs, fonts, `og.jpg`, `robots.txt`).

A project image narrower than 1000px is automatically rendered as a clean white band
with black type instead of being stretched across a full-bleed image. That is why
two of the four projects look different on the index.

## Structure

```
src/
  assets/          images Astro optimises (art/, work/, portrait.jpg)
  components/      Masthead, Footer
  content/         projects/*.md
  data/art.ts      the artwork list
  layouts/Base     <head>, masthead, colossus wordmark, footer, reveal-on-scroll
  lib/images.ts    filename -> optimised image lookup
  pages/           index, work/, work/[slug], art, about
  styles/global.css   the whole design system, tokens at the top
public/
  fonts/           fraunces.woff2, geist.woff2 (subset, variable)
  pdf/             the three papers
```

## Deploying

The build output is a plain folder of HTML. Any of these work; Cloudflare Pages and
Netlify both have a free tier that is more than enough.

- Build command: `pnpm build`
- Output directory: `dist`
- Node version: 24

### Pointing caitlinkchen.com at it

The domain is registered at **Namecheap**; only the nameservers currently point at Wix
(`ns0.wixdns.net` / `ns1.wixdns.net`). So there is nothing to transfer — just repoint DNS:

1. Deploy first and confirm the site works on the host's own URL.
2. Add `caitlinkchen.com` and `www.caitlinkchen.com` as custom domains on the host.
3. In Namecheap, set the domain's nameservers to the ones the host gives you
   (or, if you'd rather keep Namecheap's DNS, switch to Namecheap BasicDNS and add the
   host's `A`/`CNAME` records instead).
4. Wait for propagation, confirm HTTPS is issued, then cancel the Wix plan.

Do step 4 last — while the nameservers still point at Wix, Wix is serving the live site.
