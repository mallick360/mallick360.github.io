import { experiences } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { TimelineItem } from '@/components/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 / Experience"
          title="A foundation built in production."
          description="7+ years across enterprise AI, creator analytics, education, and event technology. Official roles and the work behind them."
        />

        <div className="relative space-y-8 border-l border-transparent">
          {experiences.map((experience, index) => (
            <TimelineItem key={`${experience.company}-${experience.duration}`} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
