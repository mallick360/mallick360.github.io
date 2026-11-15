import { experiences, personal } from '@/constants/content'
import { TimelineItem } from '@/components/TimelineItem'
import { ArrowUpRight } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="section-shell grid items-start gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-accent">03 / Career</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">Built in production.<br />Across industries.</h2>
          <p className="mt-5 text-sm leading-7 text-text-muted">7+ years across enterprise AI, creator analytics, education, and event technology. From individual contributor to technical lead.</p>
          <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs text-accent">Download the full résumé <ArrowUpRight size={14} /></a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {experiences.map((experience, index) => <TimelineItem key={`${experience.company}-${experience.duration}`} experience={experience} index={index} />)}
        </div>
      </div>
    </section>
  )
}
