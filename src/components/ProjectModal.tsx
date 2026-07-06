import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FaGithub as Github } from 'react-icons/fa6'
import type { Project } from '@/types/content'
import { Badge } from '@/components/Badge'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-text">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 rounded-full border border-border p-1.5 text-text-muted hover:text-accent"
              >
                <X size={18} />
              </button>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="mt-4 aspect-video w-full rounded-xl object-cover"
            />

            <p
              className="mt-4 text-sm leading-relaxed text-text-muted [&_b]:font-semibold [&_b]:text-text"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {project.stack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft"
              >
                <Github size={16} /> View on GitHub
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
