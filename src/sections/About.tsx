import { motion } from 'framer-motion'
import { Brain, Building2, Cloud, Users } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/Card'
import { staggerContainer, fadeUp } from '@/animations/variants'

const pillars = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description:
      'Architecting enterprise GenAI systems — RAG pipelines, AI Agents, LLM evaluation, and observability — for a regulated U.S. healthcare platform on Gemini and Vertex AI.',
  },
  {
    icon: Building2,
    title: 'Enterprise Development',
    description:
      'Seven years building production systems at scale: a creator-analytics platform serving 100+ customers and 280M+ profiles, and CMS/SaaS platforms used by thousands of daily users.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description:
      'Designing and operating cloud infrastructure across GCP and AWS — containers, managed databases, event streaming, and serverless — with 99.99% uptime in production.',
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description:
      'Led and mentored a 6-engineer team, lifting sprint velocity by 30% while enforcing GDPR compliance and clean-architecture standards across the codebase.',
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering journey"
          description="From full-stack product engineering to leading enterprise Generative AI initiatives in regulated environments."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {pillars.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Card className="h-full">
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-text">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
