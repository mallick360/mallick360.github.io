import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { caseStudies } from '@/constants/caseStudies'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/Badge'

export function SelectedWork() {
  return (
    <section id="work" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 / Selected professional work" title="Different problems. End-to-end ownership." description="Work across product engineering, systems architecture, and applied AI. Each example makes my contribution and the delivery context explicit." />
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="grid gap-8 rounded-xl border border-border bg-surface p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="eyebrow text-text-faint">0{index + 1} / {study.company}</p>
                <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{study.summary}</p>
                <p className="mt-5 text-xs leading-6 text-text-faint">{study.scope}</p>
                <div className="mt-5 flex flex-wrap gap-2">{study.stack.map(tool => <Badge key={tool}>{tool}</Badge>)}</div>
              </div>
              <div>
                <div className="blueprint rounded-lg border border-border p-5 sm:p-6">
                  <div className="mb-6 flex justify-between gap-4"><span className="eyebrow text-text-muted">Delivery scope / {study.period}</span><ArrowDownRight size={18} className="text-accent" /></div>
                  <ol className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    {study.flow.map((step, i) => (
                      <li key={step} className="flex flex-1 items-center gap-2">
                        <span className="flex min-h-16 flex-1 items-center rounded border border-border bg-bg/95 px-3 py-3 text-xs font-medium leading-5">{step}</span>
                        {i < study.flow.length - 1 && <ArrowRight size={14} aria-hidden className="hidden shrink-0 text-accent sm:block" />}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-[10px] leading-4 text-text-muted">Conceptual scope · summarized from professional experience</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{study.signals.map(signal => <span key={signal} className="text-xs font-medium text-accent">↗ {signal}</span>)}</div>
                <details className="group mt-6 border-t border-border">
                  <summary className="flex list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-text [&::-webkit-details-marker]:hidden">Read the delivery story <span aria-hidden className="text-xl font-normal text-accent group-open:rotate-45">+</span></summary>
                  <dl className="space-y-5 pb-3">
                    {[
                      ['The problem', study.problem], ['My contribution', study.ownership],
                      ['Technical decisions', study.decisions], ['Delivery & evidence', study.outcome],
                    ].map(([label, value]) => <div key={label}><dt className="eyebrow text-accent">{label}</dt><dd className="mt-2 text-sm leading-7 text-text-muted">{value}</dd></div>)}
                  </dl>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
