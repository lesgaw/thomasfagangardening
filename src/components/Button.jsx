import { Link } from 'react-router-dom'

const styles = {
  primary:
    'bg-leaf-500 text-white hover:bg-leaf-600 shadow-soft hover:shadow-lg focus-visible:ring-leaf-500',
  secondary:
    'bg-white text-leaf-700 ring-1 ring-leaf-200 hover:bg-leaf-50 focus-visible:ring-leaf-500',
  ghost: 'bg-transparent text-white ring-1 ring-white/60 hover:bg-white/10 focus-visible:ring-white',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-600 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

// Polymorphic button: renders an internal <Link>, an external <a>, or a <button>.
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
