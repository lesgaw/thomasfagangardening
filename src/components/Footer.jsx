import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import { business } from '../siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-leaf-900 text-leaf-100">
      <div className="container-tight grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-leaf-200">{business.established}</p>
        </div>

        <div>
          <h2 className="font-display text-base text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['/', 'Home'],
              ['/services', 'Services'],
              ['/gallery', 'Gallery'],
              ['/about', 'About'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-leaf-200 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {business.serviceArea}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base text-white">Follow</h2>
          <div className="mt-4 flex gap-3">
            {business.social.facebook && (
              <a
                href={business.social.facebook}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {business.social.instagram && (
              <a
                href={business.social.instagram}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {!business.social.facebook && !business.social.instagram && (
              <p className="text-sm text-leaf-300">Social links coming soon.</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-leaf-300 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Website built with care. 🌱</p>
        </div>
      </div>
    </footer>
  )
}
