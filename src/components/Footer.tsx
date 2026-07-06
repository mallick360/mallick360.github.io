import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6'
import { personal, socialLinks } from '@/constants/content'
import { navItems } from '@/constants/navigation'
import { scrollToSection } from '@/utils/scroll'

const iconMap = { github: Github, linkedin: Linkedin }

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-text-faint">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-muted transition-colors hover:text-accent"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
