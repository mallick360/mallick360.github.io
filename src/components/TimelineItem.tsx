import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { Experience } from '@/types/content'
import { fadeUp } from '@/animations/variants'
import { Badge } from '@/components/Badge'
import { cn } from '@/utils/cn'

const COLLAPSED_COUNT = 3

export function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = experience.bullets.length > COLLAPSED_COUNT
  const visibleBullets = expanded ? experience.bullets : experience.bullets.slice(0, COLLAPSED_COUNT)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
      {index > 0 && (
        <span className="absolute -top-8 left-[5px] h-8 w-px bg-border" aria-hidden />
      )}

      <div className="glass rounded-2xl p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-text">
            {experience.company} <span className="text-text-muted">| {experience.role}</span>
          </h3>
          <span className="text-sm font-medium text-accent">{experience.duration}</span>
        </div>
        <p className="mt-1 text-sm text-text-faint">{experience.location}</p>

        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-muted">
          {visibleBullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span dangerouslySetInnerHTML={{ __html: bullet }} className="[&_b]:font-semibold [&_b]:text-text" />
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-soft"
          >
            {expanded ? 'Show less' : `Show ${experience.bullets.length - COLLAPSED_COUNT} more`}
            <ChevronDown size={16} className={cn('transition-transform', expanded && 'rotate-180')} />
          </button>
        )}

        {experience.stack && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            {experience.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
