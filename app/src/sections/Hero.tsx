import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, MoveRight } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6'
import { personal, socialLinks } from '@/constants/content'
import { Button } from '@/components/Button'
import { scrollToSection } from '@/utils/scroll'
import { staggerContainer, fadeUp } from '@/animations/variants'

const iconMap = { github: Github, linkedin: Linkedin }

function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % personal.roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-9 overflow-hidden sm:h-10">
      <AnimatePresence mode="wait">
        <motion.p
          key={personal.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl font-semibold text-accent sm:text-3xl"
        >
          {personal.roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

const codeSnippet = `const engineer = {
  name: "Aashish Mallick",
  focus: "GenAI · RAG · Cloud",
  stack: ["Python", "GCP", "React"],
  status: "shipping"
}`

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-text-muted">{personal.availability}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.1] text-text sm:text-5xl lg:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-3">
            <RotatingRole />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
            {personal.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={personal.resumeUrl} target="_blank" icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('#contact')}>
              Contact
            </Button>
            <Button
              variant="ghost"
              icon={<MoveRight size={16} />}
              onClick={() => scrollToSection('#experience')}
            >
              View Experience
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5">
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
                  <Icon size={22} />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="glass hidden rounded-2xl p-5 font-mono text-sm shadow-2xl shadow-black/40 lg:block"
        >
          <div className="mb-4 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <pre className="whitespace-pre-wrap text-text-muted">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
