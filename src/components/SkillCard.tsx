import { motion } from 'framer-motion'
import type { SkillItem } from '@/types/content'

export function SkillCard({ name, icon }: SkillItem) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2"
    >
      <img src={icon} alt="" className="h-5 w-5 object-contain" loading="lazy" />
      <span className="text-sm text-text-muted">{name}</span>
    </motion.div>
  )
}
