#!/usr/bin/env python3
"""Generate on-brand placeholder images into public/images so the site always
has working pictures. Real photos can overwrite these (same filenames)."""
import os
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

# Brand greens (light, dark) pairs for variety
PALETTES = [
    ((109, 168, 78), (47, 86, 31)),
    ((77, 138, 50), (34, 58, 27)),
    ((146, 197, 119), (59, 110, 38)),
    ((107, 168, 78), (40, 69, 29)),
    ((123, 179, 92), (47, 86, 31)),
]

def font(size, bold=True):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def gradient(w, h, c1, c2):
    base = Image.new("RGB", (w, h), c1)
    top = Image.new("RGB", (w, h), c2)
    mask = Image.new("L", (w, h))
    md = mask.load()
    for y in range(h):
        for x in range(0, w, 4):  # step for speed, fill 4px
            v = int(255 * ((x / w) * 0.5 + (y / h) * 0.5))
            for dx in range(4):
                if x + dx < w:
                    md[x + dx, y] = v
    base.paste(top, (0, 0), mask)
    return base

def leaf(draw, cx, cy, r, color):
    # simple leaf: two arcs via ellipses rotated, approximated with a polygon
    pts = []
    import math
    for t in range(0, 181, 10):
        a = math.radians(t)
        pts.append((cx + r * math.sin(a) * 0.6, cy - r * math.cos(a)))
    for t in range(180, 361, 10):
        a = math.radians(t)
        pts.append((cx + r * math.sin(a) * 0.6, cy - r * math.cos(a)))
    draw.polygon(pts, fill=color)

# Full-bleed background images sit BEHIND the site's own headings, so they must
# carry no text of their own (otherwise it ghosts through). These get a plain
# gradient + leaf motif only.
BACKGROUNDS = {
    "hero-home.jpg",
    "header-services.jpg",
    "header-gallery.jpg",
    "header-about.jpg",
    "header-contact.jpg",
}

def make(name, label, w, h, idx):
    c1, c2 = PALETTES[idx % len(PALETTES)]
    img = gradient(w, h, c1, c2)
    d = ImageDraw.Draw(img, "RGBA")
    # big translucent leaf motif
    leaf(d, int(w * 0.78), int(h * 0.5), int(h * 0.55), (255, 255, 255, 28))
    leaf(d, int(w * 0.2), int(h * 0.72), int(h * 0.32), (255, 255, 255, 18))

    if name not in BACKGROUNDS:
        # foreground images (cards, gallery) get a label + a small tag
        f = font(max(28, int(h * 0.085)))
        tb = d.textbbox((0, 0), label, font=f)
        tw, th = tb[2] - tb[0], tb[3] - tb[1]
        d.text(((w - tw) / 2, (h - th) / 2 - tb[1]), label, font=f, fill=(255, 255, 255, 235))
        fs = font(max(16, int(h * 0.032)), bold=False)
        tag = "placeholder — replace with a real photo"
        tb2 = d.textbbox((0, 0), tag, font=fs)
        d.text(((w - (tb2[2] - tb2[0])) / 2, h - int(h * 0.12)), tag, font=fs,
               fill=(255, 255, 255, 150))

    img.save(os.path.join(OUT, name), "JPEG", quality=82)
    print("  generated", name)

IMAGES = [
    ("hero-home.jpg", "Thomas Fagan Gardening", 1600, 900),
    ("header-services.jpg", "Our Services", 1600, 760),
    ("header-gallery.jpg", "Our Work", 1600, 760),
    ("header-about.jpg", "Meet Thomas", 1600, 760),
    ("header-contact.jpg", "Get in Touch", 1600, 760),
    ("about-body.jpg", "Thomas Fagan Gardening", 1200, 900),
    ("service-lawn.jpg", "Lawn Mowing & Care", 1200, 750),
    ("service-hedge.jpg", "Hedge & Shrub Trimming", 1200, 750),
    ("service-planting.jpg", "Planting & Borders", 1200, 750),
    ("service-clearance.jpg", "Garden Clearance", 1200, 750),
    ("service-weeding.jpg", "Weeding & Maintenance", 1200, 750),
    ("service-pots.jpg", "Pots & Planters", 1200, 750),
    ("gallery-1.jpg", "Striped Lawn", 1200, 900),
    ("gallery-2.jpg", "Healthy Planting", 1200, 900),
    ("gallery-3.jpg", "Neat Hedges", 1200, 900),
    ("gallery-4.jpg", "Sharp Edges", 1200, 900),
    ("gallery-5.jpg", "A Garden to Enjoy", 1200, 900),
    ("gallery-6.jpg", "Tidy & Cleared", 1200, 900),
]

for i, (name, label, w, h) in enumerate(IMAGES):
    make(name, label, w, h, i)

print("Done. Generated", len(IMAGES), "placeholder images in public/images/")
