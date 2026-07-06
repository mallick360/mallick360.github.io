import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15% 0px' }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-text-muted">{description}</p>}
    </motion.div>
  )
}
