// ============================================================================
//  fetch-images.mjs — download the site's placeholder photos to public/images/
//
//  Run it once on your own machine:   npm run fetch-images
//
//  Why: the site references LOCAL images (in /public/images) so it never relies
//  on an external photo host that might move or remove a picture. This script
//  fetches a curated set of free Unsplash photos into that folder.
//
//  Robustness: each image has a list of candidate sources. The script saves the
//  FIRST one that downloads successfully, so a single dead link can't leave a
//  gap. Re-run any time; existing files are overwritten.
//
//  Swapping in real photos: just drop your own file into public/images with the
//  same name (e.g. gallery-1.jpg) — no code change needed.
// ============================================================================

import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'images')

// Build an Unsplash delivery URL for a given photo id.
const u = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`

// filename  ->  ordered list of candidate source URLs (first that works wins)
const IMAGES = {
  // Page hero / header banners (wide)
  'hero-home.jpg': [u('1558904541-efa843a96f01', 2000)],
  'header-services.jpg': [u('1416879595882-3373a0480b5b', 2000), u('1466692476868-aef1dfb1e735', 2000)],
  'header-gallery.jpg': [u('1523301343968-6a6ebf63c672', 2000)],
  'header-about.jpg': [u('1466692476868-aef1dfb1e735', 2000)],
  'header-contact.jpg': [u('1485955900006-10f4d324d411', 2000), u('1444392061186-9fc38f84f726', 2000)],
  'about-body.jpg': [u('1591857177580-dc82b9ac4e1e', 1400), u('1466692476868-aef1dfb1e735', 1400)],

  // Service cards
  'service-lawn.jpg': [u('1592722077789-9b71f3ea9c12'), u('1558904541-efa843a96f01')],
  'service-hedge.jpg': [u('1416879595882-3373a0480b5b')],
  'service-planting.jpg': [u('1599629954294-14df9ec8bc04'), u('1444392061186-9fc38f84f726')],
  'service-clearance.jpg': [u('1466692476868-aef1dfb1e735'), u('1469125155630-7ed37e065743')],
  'service-weeding.jpg': [u('1523348837708-15d4a09cfac2'), u('1416879595882-3373a0480b5b')],
  'service-pots.jpg': [u('1485955900006-10f4d324d411'), u('1444392061186-9fc38f84f726')],

  // Gallery — these six use photos confirmed to load, so the grid is always full
  'gallery-1.jpg': [u('1558904541-efa843a96f01', 1200)],
  'gallery-2.jpg': [u('1444392061186-9fc38f84f726', 1200)],
  'gallery-3.jpg': [u('1591857177580-dc82b9ac4e1e', 1200)],
  'gallery-4.jpg': [u('1416879595882-3373a0480b5b', 1200)],
  'gallery-5.jpg': [u('1523301343968-6a6ebf63c672', 1200)],
  'gallery-6.jpg': [u('1469125155630-7ed37e065743', 1200)],
}

async function tryDownload(url) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const type = res.headers.get('content-type') || ''
  if (!type.startsWith('image/')) throw new Error(`not an image (${type || 'unknown'})`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 2000) throw new Error('suspiciously small file')
  return buf
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true })
  const names = Object.keys(IMAGES)
  let ok = 0
  const failures = []

  for (const name of names) {
    const candidates = IMAGES[name]
    let saved = false
    for (const url of candidates) {
      try {
        const buf = await tryDownload(url)
        await writeFile(join(OUT_DIR, name), buf)
        console.log(`  ✓ ${name}  (${(buf.length / 1024).toFixed(0)} KB)`)
        ok++
        saved = true
        break
      } catch (err) {
        // try the next candidate
      }
    }
    if (!saved) failures.push(name)
  }

  console.log(`\nDownloaded ${ok}/${names.length} images into public/images/`)
  if (failures.length) {
    console.log(
      `\n⚠  Could not fetch: ${failures.join(', ')}\n` +
        `   Drop a replacement photo into public/images/ with that exact filename,\n` +
        `   or re-run the script later. The rest of the site is unaffected.`,
    )
  }
}

run().catch((e) => {
  console.error('Image download failed:', e)
  process.exit(1)
})
