import { motion } from 'framer-motion'
import { achievements } from '@/constants/content'
import { SectionHeading } from '@/components/SectionHeading'
import { StatCounter } from '@/components/StatCounter'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Impact" title="Numbers that tell the story" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.label} variants={fadeUp}>
              <StatCounter {...achievement} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
