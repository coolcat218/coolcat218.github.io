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

Live at **https://coolcat218.github.io** — pushed to `main`, built by GitHub Actions
(`.github/workflows/deploy.yml`), served by GitHub Pages. Pages is set to `build_type:
workflow`, so the deployed site is the built `dist/`, not the source tree.

Every push to `main` redeploys. Nothing else to run.

### Pointing caitlinkchen.com at it

The domain is registered at **Namecheap**; only the nameservers point at Wix
(`ns0.wixdns.net` / `ns1.wixdns.net`), so there is nothing to transfer — just move DNS.

Do it in this order, or the site goes dark mid-way:

1. **Namecheap → Domain List → caitlinkchen.com → Nameservers**: switch from Custom DNS
   to **Namecheap BasicDNS**. This is the step that takes the domain away from Wix.
2. **Advanced DNS**, add these records (GitHub Pages, verified 2026-08-18):

   | Type  | Host | Value |
   | ----- | ---- | ----- |
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | coolcat218.github.io. |

   Optionally add the IPv6 AAAA records for `@` too: `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

3. Wait for propagation. Check with `dig +short caitlinkchen.com A` — you want the
   `185.199.x.153` set, not Wix's `185.230.63.x`.
4. Tell GitHub about the domain, which also writes the `CNAME` file the Actions deploy
   needs so the setting survives future builds:

   ```bash
   echo 'caitlinkchen.com' > public/CNAME
   git add public/CNAME && git commit -m "Add custom domain" && git push
   gh api -X PUT repos/coolcat218/coolcat218.github.io/pages -f 'cname=caitlinkchen.com'
   gh api -X POST repos/coolcat218/coolcat218.github.io/pages/https --silent  # enforce HTTPS
   ```

   Don't do this before step 3 — setting the custom domain makes
   `coolcat218.github.io` redirect to `caitlinkchen.com`, so if DNS still points at Wix
   you lose the working preview.
5. Confirm `https://caitlinkchen.com` loads and the certificate is valid, **then**
   cancel the Wix plan. While the nameservers point at Wix, Wix is the live site.

### If you'd rather not use GitHub Pages

The build output is a plain folder of HTML, so Cloudflare Pages, Netlify and Vercel all
work: build command `pnpm build`, output directory `dist`, Node 24.
