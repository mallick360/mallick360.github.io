import { Braces, Blocks, Workflow, ArrowUpRight } from 'lucide-react'
import { skills } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'

const capabilities = [
  { icon: Braces, title: 'Build the product', description: 'Connect user workflows to reliable services and data.', areas: ['Full-stack application development', 'APIs & third-party integrations', 'Design systems & enterprise workflows'], tools: 'React · Next.js · TypeScript · Python · Go' },
  { icon: Blocks, title: 'Design the system', description: 'Shape architecture around integration, security, and operational constraints.', areas: ['Service boundaries & data flows', 'Cloud infrastructure & access control', 'AI, retrieval & orchestration'], tools: 'AWS · GCP · PostgreSQL · Kafka · Vertex AI' },
  { icon: Workflow, title: 'Own the delivery', description: 'Carry implementation through deployment and production operation.', areas: ['Cross-functional collaboration', 'Evaluation, monitoring & reliability', 'Technical leadership & reusable standards'], tools: 'Docker · CloudWatch · LLM evaluation · Governance' },
]

export function Architecture() {
  return (
    <section id="architecture" className="border-y border-border bg-surface/40 px-6 py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading eyebrow="02 / Capabilities & approach" title="One engineer. A connected view of the system." description="A full-stack foundation with the architectural perspective to connect the pieces—and the ownership to see delivery through." />
          <div className="mb-10 flex items-end"><p className="max-w-lg text-sm leading-7 text-text-muted">My work spans interfaces, backend services, applied AI, data, and infrastructure. I work with engineering, security, and business teams to connect requirements with practical technical decisions.</p></div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description, areas, tools }, i) => <article key={title} className="rounded-xl border border-border bg-surface p-6">
            <div className="flex justify-between"><Icon size={22} strokeWidth={1.4} className="text-accent" /><span className="font-mono text-[10px] text-text-faint">0{i + 1}</span></div>
            <h3 className="mt-7 font-display text-xl font-medium tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{description}</p>
            <ul className="mt-6 space-y-3">{areas.map(area => <li key={area} className="flex items-start gap-2 text-xs leading-5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{area}</li>)}</ul>
            <p className="mt-6 border-t border-border pt-4 text-[11px] leading-6 text-text-faint">{tools}</p>
          </article>)}
        </div>
        <div className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-4">
          {['Understand the requirement', 'Design & validate', 'Build & integrate', 'Deploy & improve'].map((step, i) => <div key={step} className="flex items-center gap-3"><span className="font-mono text-[10px] text-accent">0{i + 1}</span><p className="text-xs text-text-muted">{step}</p></div>)}
        </div>
        <details className="mt-6">
          <summary className="text-xs font-medium text-accent">Explore the technology toolkit</summary>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{skills.map(category => <div key={category.heading}><dt className="eyebrow text-text">{category.heading}</dt><dd className="mt-2 text-xs leading-7 text-text-muted">{category.items.map(item => item.name).join(' · ')}</dd></div>)}</dl>
        </details>
        <a href="#work" className="mt-6 inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent">See these capabilities in practice <ArrowUpRight size={13} /></a>
      </div>
    </section>
  )
}
