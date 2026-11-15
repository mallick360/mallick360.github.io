import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { caseStudies } from '@/constants/caseStudies'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/Badge'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { cn } from '@/utils/cn'

const labels = [
  { title: 'Enterprise product engineering', category: 'Full-stack / Integrations', short: 'Hyp.io platform' },
  { title: 'Governed healthcare AI', category: 'Architecture / Applied AI', short: 'Enterprise knowledge systems' },
  { title: 'Real-time voice coaching', category: 'AI / Interactive systems', short: 'Conversational training' },
]

export function SelectedWork() {
  const [selected, setSelected] = useState(0)
  const study = caseStudies[selected]

  return (
    <section id="work" className="px-6 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="01 / Selected work" title="The problem. The system. The delivery." description="Three examples of taking ownership across application development, architecture, integrations, and production operations." />
        <div className="grid items-start gap-5 lg:grid-cols-[0.75fr_1.65fr] lg:gap-7">
          <div className="grid gap-2" aria-label="Choose a professional case study">
            {labels.map((label, index) => <button key={label.title} type="button" aria-pressed={selected === index} aria-controls="selected-case-study" onClick={() => setSelected(index)} className={cn('group rounded-xl border p-5 text-left transition-colors', selected === index ? 'border-accent/50 bg-accent/[0.08]' : 'border-transparent hover:border-border hover:bg-surface')}>
              <div className="mb-5 flex items-center justify-between"><span className="font-mono text-xs text-text-faint">0{index + 1}</span><ArrowUpRight size={16} className={selected === index ? 'text-accent' : 'text-text-faint'} /></div>
              <p className="eyebrow text-accent">{label.category}</p>
              <h3 className="mt-2 font-display text-base font-semibold">{label.title}</h3>
              <p className="mt-2 text-xs text-text-faint">{label.short}</p>
            </button>)}
            <p className="px-5 pt-4 text-xs leading-6 text-text-faint">Professional work at Only Much Louder and enGen Global. My contribution is described within each case.</p>
          </div>
          <article id="selected-case-study" aria-labelledby="case-study-title" className="work-panel min-w-0 rounded-2xl p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3"><p className="eyebrow text-accent">{study.company}</p><p className="font-mono text-[10px] text-text-faint">{study.period}</p></div>
            <h3 id="case-study-title" className="mt-5 max-w-xl font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{study.title}</h3>
            <p className="mt-4 text-sm leading-7 text-text-muted">{study.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">{study.stack.map(tool => <Badge key={tool}>{tool}</Badge>)}</div>
            <div className="mt-8 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
              <div><h4 className="eyebrow text-text-faint">The problem</h4><p className="mt-3 text-sm leading-7 text-text-muted">{study.problem}</p></div>
              <div><h4 className="eyebrow text-text-faint">What I owned</h4><p className="mt-3 text-sm leading-7 text-text-muted">{study.ownership}</p></div>
            </div>
            <ArchitectureDiagram studyId={study.id} />
            <div className="mt-7"><h4 className="eyebrow text-accent">Delivered</h4><p className="mt-3 text-sm leading-7 text-text-muted">{study.outcome}</p><ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">{study.signals.map(signal => <li key={signal} className="flex items-center gap-2 text-xs text-text"><Check size={13} className="text-accent" />{signal}</li>)}</ul></div>
            <details key={study.id} className="group mt-7 border-t border-border pt-5"><summary className="flex list-none items-center justify-between text-xs font-medium text-accent [&::-webkit-details-marker]:hidden">Architecture & implementation decisions<span aria-hidden className="text-lg group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-text-muted">{study.decisions}</p></details>
          </article>
        </div>
      </div>
    </section>
  )
}
