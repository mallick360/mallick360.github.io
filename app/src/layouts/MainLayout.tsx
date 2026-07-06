import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { GradientBackground } from '@/components/GradientBackground'
import { ScrollProgress } from '@/components/ScrollProgress'

export function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
