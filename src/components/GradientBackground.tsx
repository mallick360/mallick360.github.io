import { useReducedMotion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export function GradientBackground() {
  const prefersReducedMotion = useReducedMotion()
  const { x, y } = useMousePosition()

  const parallaxX = prefersReducedMotion ? 0 : (x - 0.5) * 40
  const parallaxY = prefersReducedMotion ? 0 : (y - 0.5) * 40

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div
        className="absolute -left-1/4 top-[-10%] h-[60vh] w-[60vh] rounded-full bg-accent/25 blur-[120px] animate-blob"
        style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
      />
      <div
        className="absolute right-[-10%] top-1/3 h-[50vh] w-[50vh] rounded-full bg-accent-soft/15 blur-[140px] animate-blob"
        style={{
          transform: `translate(${-parallaxX}px, ${-parallaxY}px)`,
          animationDelay: '4s',
        }}
      />
      <div
        className="absolute bottom-[-15%] left-1/3 h-[55vh] w-[55vh] rounded-full bg-accent/10 blur-[130px] animate-blob"
        style={{ animationDelay: '8s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_75%)]" />
    </div>
  )
}
