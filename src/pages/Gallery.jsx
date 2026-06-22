import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CtaBand } from './Home'
import usePageMeta from '../hooks/usePageMeta'
import { gallery } from '../siteConfig'

export default function Gallery() {
  usePageMeta('Gallery', 'See examples of our garden maintenance, lawns, hedges and planting work.')

  const [index, setIndex] = useState(null) // null = closed
  const open = index !== null
  const closeBtnRef = useRef(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [],
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [],
  )

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, next, prev])

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at our work"
        subtitle="Tap any photo to take a closer look. These will be swapped for real photos of Thomas’s gardens."
        image="/images/header-gallery.jpg"
      />

      <section className="py-20">
        <div className="container-tight">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group block aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-bark-100 focus-visible:ring-2 focus-visible:ring-leaf-500"
                  aria-label={`View larger image: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bark-900/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[index].src}
              alt={gallery[index].alt}
              className="max-h-[78vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-leaf-50/90">
              {gallery[index].caption} ({index + 1} / {gallery.length})
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}

      <CtaBand />
    </>
  )
}
