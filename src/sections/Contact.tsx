import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6'
import { emailjsConfig, socialLinks } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { fadeUp, slideInLeft, slideInRight } from '@/animations/variants'

const iconMap = { github: Github, linkedin: Linkedin }

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    emailjs
      .sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, formRef.current, emailjsConfig.publicKey)
      .then(() => {
        setStatus('sent')
        formRef.current?.reset()
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="I read every message. Send your name and email and I'll get back to you."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="glass flex flex-col justify-between rounded-2xl p-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-text">Find me elsewhere</h3>
              <p className="mt-2 text-sm text-text-muted">
                Prefer social? Reach out on LinkedIn or check out my work on GitHub.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={16} /> {link.label}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="glass space-y-4 rounded-2xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="user_name"
                required
                placeholder="First Name"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="user_subject"
              required
              placeholder="Subject"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />
            <textarea
              name="user_message"
              required
              rows={4}
              placeholder="Message"
              className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />

            <motion.p variants={fadeUp} className="min-h-5 text-sm text-accent">
              {status === 'sent' && 'Message sent successfully ✅'}
              {status === 'error' && 'Message not sent (service error) ❌'}
            </motion.p>

            <Button type="submit" icon={<Send size={16} />} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
