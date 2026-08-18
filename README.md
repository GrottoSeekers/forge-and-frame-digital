# Forge & Frame Digital

Marketing site for a new web-design studio helping local businesses that
either don't have a website yet, or have one that badly needs an upgrade.
Starting in the UK, open to clients anywhere.

Built with [Astro](https://astro.build/) — same lightweight stack as the
Grotto Sitters site, so it's cheap to host and easy to hand-edit later.

**This is a working placeholder brand** — swap the name, logo, colours and
copy for your real ones whenever you're ready. Nothing here is final.

---

## Before this goes live — TODO

- [ ] **Name & logo**: "Forge & Frame Digital" and the `F&F` badge in
      `src/components/Header.astro` / `Footer.astro` / `public/favicon.svg`
      are placeholders. Replace the wordmark, or drop in a real logo image.
- [ ] **Contact email/phone**: replace `hello@forgeandframe.digital` in
      `src/components/Contact.astro`.
- [ ] **Contact form endpoint**: the form currently posts to a placeholder
      Formspree URL. To make it work:
      1. Create a free form at [formspree.io](https://formspree.io)
      2. Copy your form ID
      3. In `src/components/Contact.astro`, replace
         `REPLACE_WITH_YOUR_FORM_ID` in the form's `action` attribute
      (Any other form backend — Netlify Forms, a Resend-powered API route,
      etc. — works too; this is just the fastest zero-backend option.)
- [ ] **Pricing**: the `£XXX` placeholders in `src/components/Pricing.astro`
      need real numbers.
- [ ] **Domain**: once you have a real domain, update `site`/`base` in
      `astro.config.mjs` (see the GitHub Pages section below).
- [ ] **Real work examples**: `src/components/Work.astro` is intentionally
      honest about having no case studies yet — once you've launched a
      few client sites, replace it with real before/after examples.

---

## Getting Started (Local Development)

### Prerequisites

You need **Node.js** installed (version 18 or higher). Download it from
[nodejs.org](https://nodejs.org/).

```bash
node --version
```

### Install & Run

```bash
npm install
npm run dev
```

This starts a local server (usually at `http://localhost:4321`).

### Build for Production

```bash
npm run build
```

Creates a `dist/` folder with the final site.

---

## Deploying with GitHub Pages

This repo already includes `.github/workflows/deploy.yml`, which builds and
deploys on every push to `main`.

1. Go to the repo on GitHub → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site will build and deploy automatically

Your site will be live at:

```
https://GrottoSeekers.github.io/forge-and-frame-digital/
```

### Using a custom domain

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In **Settings → Pages → Custom domain**, enter it
3. Add a CNAME record at your registrar pointing to `GrottoSeekers.github.io`
4. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: "https://yourdomain.com",
     base: "/",
   });
   ```

---

## Project Structure

```
/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # Header, Hero, Services, Pricing, Contact, etc.
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css   # Colours, type, and shared design tokens
├── astro.config.mjs
└── package.json
```

## Design tokens

Colours, fonts, and spacing live at the top of `src/styles/global.css` as
CSS variables (`--ink`, `--accent`, `--paper`, etc.) — change them there
once you've settled on real branding and every section updates.

---

## Reusing this for client sites

This project doubles as a starting template: for each local-business
client, copy this repo, swap the copy/branding/colours for their business,
replace the sections that don't apply (e.g. drop Pricing for a client
site), and point the GitHub Pages / custom domain setup at their domain
instead.
