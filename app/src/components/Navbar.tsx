import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/constants/navigation'
import { personal } from '@/constants/content'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollToSection } from '@/utils/scroll'
import { cn } from '@/utils/cn'
import { Button } from '@/components/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(navItems.map((item) => item.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    scrollToSection(href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick('#home')}
          className="font-display text-lg font-semibold text-text"
        >
          {personal.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors',
                  activeId === item.href.replace('#', '')
                    ? 'text-accent'
                    : 'text-text-muted hover:text-text',
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="ghost" onClick={() => handleNavClick('#contact')} className="!py-2">
            Contact Me
          </Button>
        </div>

        <button
          className="text-text md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href} className="border-t border-border">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'block w-full px-6 py-4 text-left text-sm font-medium',
                    activeId === item.href.replace('#', '') ? 'text-accent' : 'text-text-muted',
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
