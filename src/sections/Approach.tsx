import { SectionHeading } from '@/components/SectionHeading'

const steps = [
  ['Understand the problem', 'Connect requirements with the workflow, people, and constraints behind them.', 'In practice: collaborating with engineering, security, and business stakeholders on healthcare AI access policies.'],
  ['Design the system', 'Define boundaries, integrations, permissions, and the path to production.', 'In practice: combining analytics services, Meta integrations, and attribute-based access in Hyp.io.'],
  ['Build across the stack', 'Connect interfaces, services, and data into a working product.', 'In practice: delivering contract workflows, transaction APIs, and client- and sales-facing interfaces.'],
  ['Deploy & improve', 'Make reliability, evaluation, and operational visibility part of delivery.', 'In practice: building LLM evaluation and observability pipelines alongside enterprise AI capabilities.'],
]

export function Approach() {
  return (
    <section id="approach" className="border-y border-border bg-surface px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="02 / How I work" title="Stay close to the problem. Own the delivery." description="The connection between business requirements and working software is where I do my best work." />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description, evidence], index) => (
            <li key={title} className="border-l border-accent/30 pl-5">
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <h3 className="mt-5 font-display text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">{description}</p>
              <p className="mt-5 text-xs leading-6 text-text-faint">{evidence}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
