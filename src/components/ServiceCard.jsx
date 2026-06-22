import { Check } from 'lucide-react'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service, showImage = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-bark-100/70 transition-transform duration-300 hover:-translate-y-1">
      {showImage && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-leaf-50 text-leaf-600">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="text-xl">{service.title}</h3>
        <p className="mt-2 text-sm text-bark-600">{service.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-bark-700">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
