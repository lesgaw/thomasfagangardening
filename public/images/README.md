# Images folder

The website loads its photos from this folder so it never depends on an external
image host.

**To download the placeholder photos**, run this once from the project root:

```bash
npm run fetch-images
```

That fetches a curated set of free gardening photos into this folder.

**To use Thomas's real photos**, just drop a file in here with the matching name
(it will be used instead — no code change needed):

- `hero-home.jpg`, `header-services.jpg`, `header-gallery.jpg`,
  `header-about.jpg`, `header-contact.jpg`, `about-body.jpg`
- `service-lawn.jpg`, `service-hedge.jpg`, `service-planting.jpg`,
  `service-clearance.jpg`, `service-weeding.jpg`, `service-pots.jpg`
- `gallery-1.jpg` … `gallery-6.jpg`

Tip: save photos at roughly 1200–1600px wide so the site stays fast.
