import Button from '../components/Button'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-24 text-center">
      <div>
        <p className="font-display text-7xl font-700 text-leaf-500">404</p>
        <h1 className="mt-4 text-3xl">This path is a bit overgrown</h1>
        <p className="mt-3 text-bark-600">
          We couldn’t find that page. Let’s get you back on the garden path.
        </p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
