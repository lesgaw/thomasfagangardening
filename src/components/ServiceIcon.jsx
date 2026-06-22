import {
  Scissors,
  TreeDeciduous,
  Sprout,
  Trash2,
  Leaf,
  Flower2,
} from 'lucide-react'

const map = { Scissors, TreeDeciduous, Sprout, Trash2, Leaf, Flower2 }

// Maps an icon name from siteConfig to a lucide-react icon component.
export default function ServiceIcon({ name, className }) {
  const Icon = map[name] || Leaf
  return <Icon className={className} aria-hidden="true" />
}
