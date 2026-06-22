import { useEffect } from 'react'
import { business } from '../siteConfig'

// Lightweight per-page <title> and meta description, no extra dependency.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${business.name}` : business.name
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
