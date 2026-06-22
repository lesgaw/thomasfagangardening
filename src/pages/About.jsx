import { Heart, Sparkles, HandHeart, Sprout } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CtaBand } from './Home'
import usePageMeta from '../hooks/usePageMeta'
import { business } from '../siteConfig'

const values = [
  {
    icon: Heart,
    title: 'Pride in every job',
    text: 'Thomas treats every garden as if it were his own — and it shows in the finish.',
  },
  {
    icon: HandHeart,
    title: 'Honest and friendly',
    text: 'Clear prices, no surprises, and a polite face you’ll be happy to see each visit.',
  },
  {
    icon: Sparkles,
    title: 'A tidy finish',
    text: 'The job isn’t done until everything is cleared away and your garden looks its best.',
  },
  {
    icon: Sprout,
    title: 'Growing a business',
    text: 'A young, local gardener building a reputation one happy customer at a time.',
  },
]

export default function About() {
  usePageMeta('About', `Meet the gardener behind ${business.name}.`)

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet Thomas"
        subtitle="A young, local gardener with a big love for the outdoors and a real eye for detail."
        image="/images/header-about.jpg"
      />

      <section className="py-20">
        <div className="container-tight grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src="/images/about-body.jpg"
                alt="A well-kept green garden with neat hedges, of the kind Thomas looks after"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-700 uppercase tracking-[0.18em] text-leaf-600">
              The story
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Started young, working hard</h2>
            <div className="mt-4 space-y-4 text-bark-700">
              <p>
                {/* ⬅ EDIT — replace this with Thomas's own words */}
                Thomas is a hard-working young gardener who decided to turn his love of being
                outdoors into a real business. What started with helping neighbours has grown into
                a friendly local service that people trust.
              </p>
              <p>
                He takes on lawns, hedges, borders, clearance and regular upkeep across{' '}
                {business.serviceArea} — always turning up when he says he will, doing a careful
                job, and leaving everything spotless.
              </p>
              <p className="rounded-xl bg-leaf-50 p-4 text-bark-800">
                <strong>A note for parents and neighbours:</strong> when you support Thomas, you’re
                helping a young person learn, grow and build something to be proud of. Thank you. 🌱
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-leaf-50/60 py-20">
        <div className="container-tight">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">What Thomas stands for</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-bark-100/70">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-leaf-50 text-leaf-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-sm text-bark-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
