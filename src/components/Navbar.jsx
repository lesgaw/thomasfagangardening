import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { business } from '../siteConfig'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname])

  // Add a subtle shadow/background once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open + allow Esc to close
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // "solid" = cream bar with shadow (scrolled or mobile menu open).
  // Otherwise the bar is transparent over a dark hero image, so links go light.
  const solid = scrolled || open

  const navLinkClass = ({ isActive }) => {
    const base = 'rounded-full px-4 py-2 text-sm font-600 transition-colors'
    if (solid) {
      return `${base} ${
        isActive
          ? 'bg-leaf-50 text-leaf-700'
          : 'text-bark-700 hover:text-leaf-700 hover:bg-leaf-50/60'
      }`
    }
    return `${base} ${
      isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/15 hover:text-white'
    }`
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-tight flex h-[72px] items-center justify-between" aria-label="Main">
        <Logo light={!solid} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" className="ml-2 px-5 py-2.5">
            Get a free quote
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            className="grid h-11 w-11 place-items-center rounded-full bg-leaf-500 text-white"
            aria-label={`Call ${business.name}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full ring-1 transition-colors ${
              solid
                ? 'text-bark-800 ring-bark-200 hover:bg-white'
                : 'text-white ring-white/40 hover:bg-white/15'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-bark-100 bg-cream lg:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-600 ${
                    isActive ? 'bg-leaf-50 text-leaf-700' : 'text-bark-800 hover:bg-leaf-50/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-2 w-full">
              Get a free quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
