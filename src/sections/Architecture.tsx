import { architecturePillars, skills } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'

export function Architecture() {
  return (
    <section id="architecture" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="03 / Engineering breadth" title="Across the stack. Across system boundaries." description="A full-stack foundation, with hands-on experience in solution architecture, applied AI, cloud infrastructure, and production operations." />
        <div className="grid gap-4 md:grid-cols-2">
          {architecturePillars.map((pillar, i) => (
            <div key={pillar.title} className="flex gap-5 rounded-lg border border-border bg-surface px-5 py-7">
              <span className="pt-1 font-mono text-xs text-accent">0{i + 1}</span>
              <div>
                <h3 className="font-display text-lg font-medium">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-muted">{pillar.description}</p>
                <p className="mt-3 text-xs leading-6 text-text-faint">{pillar.items.join(' / ')}</p>
              </div>
            </div>
          ))}
        </div>
        <details className="mt-6 border-y border-border py-5">
          <summary className="text-sm font-medium text-accent">Explore the full technology toolkit</summary>
          <dl className="mt-6 grid gap-6 pb-3 sm:grid-cols-2">
            {skills.map(category => <div key={category.heading}><dt className="eyebrow text-text">{category.heading}</dt><dd className="mt-2 text-sm leading-7 text-text-muted">{category.items.map(item => item.name).join(' · ')}</dd></div>)}
          </dl>
        </details>
      </div>
    </section>
  )
}
