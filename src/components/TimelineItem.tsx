import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Experience } from '@/types/content'
import { Badge } from '@/components/Badge'
import { cn } from '@/utils/cn'

const COLLAPSED_COUNT = 2

export function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = experience.bullets.length > COLLAPSED_COUNT
  const visibleBullets = expanded ? experience.bullets : experience.bullets.slice(0, COLLAPSED_COUNT)

  return (
    <article className="py-7">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3"><p className="font-mono text-[10px] text-text-faint">{experience.duration}</p>{index === 0 && <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] text-accent">Current</span>}</div>
      <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-xl font-semibold tracking-tight">{experience.company}</h3><span className="text-xs text-accent">{experience.role}</span></div>
      <p className="mt-1 text-xs text-text-faint">{experience.location}</p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-text-muted">
        {visibleBullets.map((bullet, i) => <li key={i} className="flex gap-3"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-text-faint" /><span dangerouslySetInnerHTML={{ __html: bullet }} className="[&_b]:font-semibold [&_b]:text-emphasis" /></li>)}
      </ul>
      {hasMore && <button type="button" aria-expanded={expanded} onClick={() => setExpanded(prev => !prev)} className="mt-5 inline-flex items-center gap-2 text-xs text-accent">{expanded ? 'Show less' : `Explore ${experience.bullets.length - COLLAPSED_COUNT} more contributions`}<ChevronDown size={14} className={cn('transition-transform', expanded && 'rotate-180')} /></button>}
      {expanded && experience.stack && <div className="mt-5 flex flex-wrap gap-2">{experience.stack.map(tech => <Badge key={tech}>{tech}</Badge>)}</div>}
    </article>
  )
}
