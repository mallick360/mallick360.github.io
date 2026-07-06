import { experiences } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { TimelineItem } from '@/components/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title="Work experience"
          description="Seven years across AI platforms, ad-tech, ed-tech, and event-tech — from individual contributor to technical lead."
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
