import { MessageCircle } from 'lucide-react'
import { business } from '../siteConfig'

// Sticky WhatsApp / message button for quick mobile contact.
export default function FloatingContact() {
  if (!business.whatsapp) return null
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-leaf-500 px-4 py-3 text-sm font-600 text-white shadow-soft transition-transform hover:scale-105 hover:bg-leaf-600"
      aria-label="Message Thomas on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Message us</span>
    </a>
  )
}
