import { motion } from 'framer-motion'
import { skills } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillCard } from '@/components/SkillCard'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Languages, frameworks, and infrastructure spanning full-stack development, cloud architecture, and applied AI."
        />

        <div className="space-y-10">
          {skills.map((category) => (
            <div key={category.heading}>
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.15em] text-text-faint">
                {category.heading}
              </h3>
              <motion.div
                variants={staggerContainer(0.03)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-10% 0px' }}
                className="flex flex-wrap gap-3"
              >
                {category.items.map((item) => (
                  <motion.div key={item.name} variants={fadeUp}>
                    <SkillCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
