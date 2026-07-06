import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { architecturePillars } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/Card'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Architecture() {
  return (
    <section id="architecture" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Architecture"
          title="Where I operate in the stack"
          description="Six pillars of hands-on expertise, from generative AI systems down to cloud infrastructure."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {architecturePillars.map((pillar, i) => (
            <motion.div key={pillar.title} variants={fadeUp}>
              <Card className="h-full">
                <span className="font-display text-xs font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-text">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{pillar.description}</p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
