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
      className="mb-12 max-w-3xl"
    >
      <span className="eyebrow text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-medium leading-[1.1] tracking-[-0.04em] text-text sm:text-[2.65rem]">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>}
    </motion.div>
  )
}
