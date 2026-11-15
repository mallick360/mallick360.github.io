import { ArrowDown, ArrowUpRight, Blocks, Braces, Cloud, Layers3 } from 'lucide-react'

const layers = [
  { icon: Layers3, title: 'Interfaces', detail: 'Product & workflows' },
  { icon: Braces, title: 'Services', detail: 'APIs & integrations' },
  { icon: Blocks, title: 'AI & data', detail: 'Intelligence & retrieval' },
  { icon: Cloud, title: 'Infrastructure', detail: 'Cloud & operations' },
]

export function EngineeringOverview() {
  return (
    <figure className="grid-paper overflow-hidden rounded-2xl border border-border bg-surface/60">
      <figcaption className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <span className="eyebrow text-text-faint">From requirement to production</span>
        <ArrowUpRight size={15} aria-hidden className="text-accent" />
      </figcaption>
      <div className="px-5 py-6 sm:px-6">
        <div className="rounded-lg border border-accent/30 bg-bg/90 px-4 py-3 text-center">
          <p className="text-xs font-medium text-text">Understand & design</p>
          <p className="mt-1 text-[10px] text-text-faint">Requirements · Constraints · Architecture</p>
        </div>
        <div aria-hidden className="flex justify-center py-3"><ArrowDown size={17} strokeWidth={1.3} className="text-accent/70" /></div>
        <div className="grid grid-cols-2 gap-3">
          {layers.map(({ icon: Icon, title, detail }) => <div key={title} className="rounded-lg border border-border bg-surface px-3 py-4 sm:px-4">
            <Icon size={20} strokeWidth={1.3} aria-hidden className="mb-4 text-accent" />
            <p className="font-display text-xs font-semibold">{title}</p>
            <p className="mt-1 text-[10px] leading-5 text-text-faint">{detail}</p>
          </div>)}
        </div>
        <div aria-hidden className="flex justify-center py-3"><ArrowDown size={17} strokeWidth={1.3} className="text-accent/70" /></div>
        <div className="rounded-lg border border-accent/30 bg-accent/[0.06] px-4 py-3 text-center">
          <p className="text-xs font-medium text-accent">Deploy, measure & improve</p>
          <p className="mt-1 text-[10px] text-text-muted">Reliability · Evaluation · Observability</p>
        </div>
      </div>
    </figure>
  )
}
