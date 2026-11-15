import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'

export function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded bg-accent px-4 py-3 text-white focus:translate-y-0">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
