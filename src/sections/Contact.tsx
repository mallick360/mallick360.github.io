import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6'
import { formspreeConfig, personal, socialLinks } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { fadeUp } from '@/animations/variants'

const iconMap = { github: Github, linkedin: Linkedin }

export function Contact() {
  const [state, handleSubmit, reset] = useForm(formspreeConfig.formId)

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 / The next chapter"
          title="Let’s talk about your engineering team."
          description="Considering me for a full-time Forward Deployed Engineer role? Share the role, the team, and the problems you’re working on."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-text">Looking for an engineer who owns the whole problem?</h3>
              <p className="mt-2 text-sm text-text-muted">
                Currently building AI platforms at enGen Global. For full-time engineering opportunities, connect with me on LinkedIn or send a message here.
              </p>
            </div>
            <a href={`mailto:${personal.email}`} className="mt-6 inline-flex items-center gap-2 self-start text-sm text-accent hover:underline"><Mail size={16} />Email me directly</a>
            <div className="mt-8 flex flex-wrap gap-3">
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
            action={`https://formspree.io/f/${formspreeConfig.formId}`}
            method="POST"
            onSubmit={handleSubmit}
            aria-busy={state.submitting}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="work-panel space-y-4 rounded-xl p-6 sm:p-8"
          >
            {state.succeeded ? (
              <div role="status" className="flex min-h-80 flex-col items-start justify-center">
                <h3 className="font-display text-2xl font-semibold">Thanks for reaching out.</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">Your message was submitted successfully. I’ll get back to you at the email address you provided.</p>
                <Button type="button" variant="ghost" onClick={reset} className="mt-6">Send another message</Button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <input
                      type="text"
                      name="name"
                      aria-describedby="contact-name-error"
                      maxLength={120}
                      required
                      disabled={state.submitting}
                      aria-label="Your name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="min-w-0 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
                    />
                    <ValidationError id="contact-name-error" field="name" prefix="Name" errors={state.errors} className="mt-2 text-xs text-emphasis" />
                  </div>
                  <div className="min-w-0">
                    <input
                      type="email"
                      name="email"
                      aria-describedby="contact-email-error"
                      maxLength={254}
                      required
                      disabled={state.submitting}
                      aria-label="Email address"
                      autoComplete="email"
                      placeholder="Email address"
                      className="min-w-0 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
                    />
                    <ValidationError id="contact-email-error" field="email" prefix="Email" errors={state.errors} className="mt-2 text-xs text-emphasis" />
                  </div>
                </div>
                <input
                  type="text"
                  name="subject"
                  aria-describedby="contact-subject-error"
                  maxLength={200}
                  required
                  disabled={state.submitting}
                  aria-label="Role or subject"
                  placeholder="Role or subject"
                  className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
                />
                <ValidationError id="contact-subject-error" field="subject" prefix="Subject" errors={state.errors} className="text-xs text-emphasis" />
                <textarea
                  name="message"
                  aria-describedby="contact-message-error"
                  maxLength={5000}
                  required
                  disabled={state.submitting}
                  rows={4}
                  aria-label="Message"
                  placeholder="Tell me about the role and team"
                  className="w-full resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
                />

                <ValidationError id="contact-message-error" field="message" prefix="Message" errors={state.errors} className="text-xs text-emphasis" />
                <div role="alert" className="text-sm text-emphasis">
                  <ValidationError errors={state.errors} />
                  {state.errors && <p className="mt-2 text-xs leading-6 text-text-muted">Please check your details and try again. You can also <a href={`mailto:${personal.email}`} className="text-accent underline">email me directly</a>.</p>}
                </div>

                <Button type="submit" icon={<Send size={16} />} disabled={state.submitting}>
                  {state.submitting ? 'Sending…' : 'Send Message'}
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
