import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import PageHeader from '../components/PageHeader'
import { CtaBand } from './Home'
import usePageMeta from '../hooks/usePageMeta'
import { services, business } from '../siteConfig'

export default function Services() {
  usePageMeta(
    'Garden services',
    `Lawn care, hedge trimming, planting, weeding and garden clearance across ${business.serviceArea}.`,
  )

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your garden needs"
        subtitle={`Friendly, reliable garden care across ${business.serviceArea} — one-off jobs or regular visits to suit you.`}
        image="/images/header-services.jpg"
      />

      <section className="py-20">
        <div className="container-tight grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} showImage />
            </Reveal>
          ))}
        </div>

        <div className="container-tight mt-16">
          <Reveal className="rounded-3xl bg-leaf-50/70 p-8 text-center sm:p-12">
            <h2 className="text-2xl sm:text-3xl">Not sure what you need?</h2>
            <p className="mx-auto mt-3 max-w-xl text-bark-600">
              That’s no problem at all. Tell us a little about your garden and we’ll suggest the best
              way to look after it — with a clear, honest price and no pressure.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
