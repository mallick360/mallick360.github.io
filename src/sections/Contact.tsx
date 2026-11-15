import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6'
import { emailjsConfig, socialLinks } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { fadeUp } from '@/animations/variants'

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
          eyebrow="06 / Get in touch"
          title="Let’s talk about your engineering team."
          description="Considering me for a full-time Forward Deployed Engineer role? Share the role, the team, and the problems you’re working on."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="glass flex flex-col justify-between rounded-md p-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-text">Full-stack depth. Systems perspective.</h3>
              <p className="mt-2 text-sm text-text-muted">
                Currently building AI platforms at enGen Global. For full-time engineering opportunities, connect with me on LinkedIn or send a message here.
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="glass space-y-4 rounded-md p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="user_name"
                required
                aria-label="Your name"
                autoComplete="name"
                placeholder="Your name"
                className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                required
                aria-label="Email address"
                autoComplete="email"
                placeholder="Email address"
                className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="user_subject"
              required
              aria-label="Role or subject"
              placeholder="Role or subject"
              className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />
            <textarea
              name="user_message"
              required
              rows={4}
              aria-label="Message"
              placeholder="Tell me about the role and team"
              className="w-full resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />

            <motion.p variants={fadeUp} role="status" aria-live="polite" className="min-h-5 text-sm text-accent">
              {status === 'sent' && 'Thanks—your message has been sent.'}
              {status === 'error' && 'Unable to send. Please try again or reach out on LinkedIn.'}
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
