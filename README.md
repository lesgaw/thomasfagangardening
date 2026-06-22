# Thomas Fagan Gardening Services — website

A modern, accessible, mobile-friendly website for Thomas's gardening business,
built with **React + Vite + Tailwind CSS**. It's a static site (no server to run
or pay for) with an interactive image gallery and an enquiry form that emails
Thomas directly.

---

## Quick start (running it on your computer)

You need [Node.js](https://nodejs.org) version 18 or newer installed.

```bash
npm install         # install once
npm run fetch-images # download the photos into public/images (run once)
npm run dev         # start the local preview — open the link it prints (e.g. http://localhost:5173)
npm run build       # create the production version in the /dist folder
npm run preview     # preview the production build locally
```

---

## ✅ Things to personalise (the important bits)

Almost everything is in **one file**: `src/siteConfig.js`. Open it and replace the
values marked `⬅ EDIT`:

1. **Contact details** — phone, email, WhatsApp number, area covered, social links.
2. **Services** — wording, and the photos for each service.
3. **Gallery photos** — swap the placeholder images for real photos of Thomas's work.
4. **Testimonials** — real quotes from happy customers.

Two other small edits:

- **About page story** (`src/pages/About.jsx`) — there's an `⬅ EDIT` note where
  Thomas can write the business story in his own words.
- **Enquiry form key** — see the next section.

### Photos (important — run this once)
All photos are stored **locally** in `public/images/` so the site never depends on
an external image host. After installing, download the placeholder photos with:

```bash
npm run fetch-images
```

This pulls a curated set of free gardening photos into `public/images/`. Each image
has fallback sources, so a single dead link can't leave a gap.

**To use Thomas's real photos:** drop a file into `public/images/` using the matching
name (e.g. `gallery-1.jpg`, `service-lawn.jpg`, `hero-home.jpg`) — it's used
automatically, no code change needed. See `public/images/README.md` for the full
list of filenames. Tip: save photos at ~1200–1600px wide so the site stays fast.

---

## 📩 Enquiry form (how messages reach Thomas)

The contact form uses **[Web3Forms](https://web3forms.com)** — a free service that
emails each enquiry to an inbox. No account or server needed.

1. Go to https://web3forms.com, enter the email address where enquiries should
   arrive, and copy the **Access Key** they email you.
2. Open `src/pages/Contact.jsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with it.
3. Done — submissions now land in that inbox. (The form already includes spam
   protection and works fine on a static host like Cloudflare Pages.)

> Until a real key is added, the form looks and behaves normally but submissions
> won't be delivered.

---

## 🚀 Deploying to Cloudflare Pages

Cloudflare Pages hosts this for free with a global CDN and automatic HTTPS.

### Option A — connect to Git (recommended, auto-deploys on every change)
1. Push this folder to a GitHub/GitLab repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo and use these build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Every future `git push` redeploys automatically.

### Option B — direct upload (no Git)
1. Run `npm run build` to create the `dist` folder.
2. In Cloudflare: **Workers & Pages → Create → Pages → Upload assets**, and
   upload the contents of `dist`.

### Custom domain
In your Pages project: **Custom domains → Set up a domain** and follow the steps
(e.g. `thomasfagangardening.co.uk`). Cloudflare handles the HTTPS certificate.

The included `public/_redirects` and `public/_headers` files configure SPA routing
and sensible security headers automatically — no extra setup needed.

> **AWS alternative:** if you ever prefer AWS, the same `dist` folder can be hosted
> on an S3 bucket behind CloudFront. Cloudflare Pages is simpler and is the
> recommended path here.

---

## Project structure

```
src/
  siteConfig.js        ← edit content here (services, gallery, contact, testimonials)
  App.jsx              ← routes + page layout
  components/          ← Navbar, Footer, buttons, cards, lightbox bits, etc.
  pages/               ← Home, Services, Gallery, About, Contact, NotFound
  hooks/               ← small helper for per-page titles
public/                ← favicon, redirects, headers, robots, (add /images here)
```

## Accessibility & quality notes
- Semantic HTML, labelled form fields, and visible keyboard focus rings.
- "Skip to content" link, Escape-to-close menus and gallery, arrow-key navigation.
- Respects `prefers-reduced-motion` for people who dislike animation.
- Responsive from small phones up to large desktops.
- Descriptive `alt` text on meaningful images.
