import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub as Github } from 'react-icons/fa6'
import { projects } from '@/constants/content'
import type { Project } from '@/types/content'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/Card'
import { ProjectModal } from '@/components/ProjectModal'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects outside the day job — spanning VR, tooling, and game development."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <Card hover className="flex h-full flex-col overflow-hidden !p-0" onClick={() => setSelected(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full cursor-pointer object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-text">{project.title}</h3>
                  <p
                    className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted [&_b]:font-semibold [&_b]:text-emphasis"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-sm font-medium text-accent hover:text-accent-soft"
                    >
                      View details
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View on GitHub"
                        className="text-text-muted hover:text-accent"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
