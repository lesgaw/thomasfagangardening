import { Link } from 'react-router-dom'
import { business } from '../siteConfig'

// Brand wordmark + leaf mark. Swap the SVG for a real logo file later if wanted.
export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 rounded-lg"
      aria-label={`${business.name} — home`}
    >
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf-500 shadow-sm transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="h-7 w-7">
          <path
            d="M44 16c0 16-9 28-24 30 0-4 .6-7.6 1.9-10.8C16 33 14 27 14 20c8 1 12 4 14 8 1.6-6 6-10 16-12Z"
            fill="#f1f8ee"
          />
          <path
            d="M20 46c4-9 9-14 18-18"
            fill="none"
            stroke="#bbdda9"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-600 ${
            light ? 'text-white' : 'text-bark-900'
          }`}
        >
          Thomas Fagan
        </span>
        <span
          className={`block text-[0.7rem] font-600 uppercase tracking-[0.18em] ${
            light ? 'text-leaf-100' : 'text-leaf-600'
          }`}
        >
          Gardening Services
        </span>
      </span>
    </Link>
  )
}
