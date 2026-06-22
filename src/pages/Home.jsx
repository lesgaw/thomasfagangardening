import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShieldCheck, Clock, Recycle, Quote } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import usePageMeta from '../hooks/usePageMeta'
import { services, testimonials, steps, gallery, business } from '../siteConfig'

const trust = [
  { icon: ShieldCheck, label: 'Reliable & trustworthy' },
  { icon: Clock, label: 'On time, every time' },
  { icon: Recycle, label: 'All waste cleared away' },
  { icon: Star, label: 'Friendly local service' },
]

export default function Home() {
  usePageMeta(
    'Garden care, lawns & landscaping',
    `${business.name} — friendly, reliable garden maintenance, lawn care, hedge trimming, planting and clearance. Free, no-obligation quotes.`,
  )

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/hero-home.jpg"
          alt="A beautifully maintained garden with a neat striped lawn and colourful borders"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-leaf-900/85 via-leaf-900/65 to-leaf-900/30" />

        <div className="container-tight pt-28 pb-20 text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-600 backdrop-blur">
              🌱 {business.tagline}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-4xl font-600 leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Gardens that look their best, looked after by someone who cares.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg text-leaf-50/90">
              Mowing, hedges, planting, clearance and regular upkeep across {business.serviceArea}.
              Honest prices, a tidy finish, and a friendly face you can rely on.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/gallery" variant="ghost">
                See our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-bark-100 bg-white">
        <div className="container-tight grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-600 text-bark-800">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20">
        <div className="container-tight">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-700 uppercase tracking-[0.18em] text-leaf-600">
              What we do
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Garden services, big and small</h2>
            <p className="mt-3 text-bark-600">
              From a one-off tidy-up to regular care all year round — whatever your garden needs.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/services" variant="secondary">
              View all services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-leaf-50/60 py-20">
        <div className="container-tight">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-700 uppercase tracking-[0.18em] text-leaf-600">
              How it works
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Getting started is easy</h2>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} as="li">
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-bark-100/70">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-500 font-display text-lg font-700 text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-bark-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20">
        <div className="container-tight">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-700 uppercase tracking-[0.18em] text-leaf-600">
                Our work
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl">A few recent gardens</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1 text-sm font-600 text-leaf-700 hover:text-leaf-800"
            >
              See the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {gallery.slice(0, 4).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bark-900 py-20 text-white">
        <div className="container-tight">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-700 uppercase tracking-[0.18em] text-leaf-300">
              Kind words
            </p>
            <h2 className="mt-2 text-3xl text-white sm:text-4xl">What customers say</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <Quote className="h-7 w-7 text-leaf-400" aria-hidden="true" />
                  <blockquote className="mt-3 flex-1 text-leaf-50/90">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-600 text-white">{t.name}</span>
                    <span className="block text-leaf-300">{t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand />
    </>
  )
}

export function CtaBand() {
  return (
    <section className="bg-leaf-500 py-16">
      <div className="container-tight flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl text-white">Ready to love your garden again?</h2>
          <p className="mt-2 max-w-xl text-leaf-50/90">
            Get a free, no-obligation quote today. Tell us what your garden needs and we’ll do the
            rest.
          </p>
        </div>
        <Button to="/contact" variant="secondary" className="shrink-0">
          Get your free quote <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
