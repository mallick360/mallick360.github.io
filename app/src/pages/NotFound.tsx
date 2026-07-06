import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-text">Page not found</h1>
      <Link to="/" className="mt-6 text-sm font-medium text-accent hover:text-accent-soft">
        Back to home
      </Link>
    </section>
  )
}
