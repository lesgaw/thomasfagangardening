import Reveal from './Reveal'

// Reusable hero/banner for interior pages.
export default function PageHeader({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-leaf-900/90 via-leaf-900/75 to-leaf-900/55" />
      <div className="container-tight pt-36 pb-16 text-white sm:pb-20">
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-700 uppercase tracking-[0.18em] text-leaf-300">{eyebrow}</p>
          )}
          <h1 className="mt-2 max-w-3xl text-4xl font-600 text-white sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-leaf-50/90">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
