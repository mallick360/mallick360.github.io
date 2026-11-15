import { ArrowUpRight } from 'lucide-react'
import { personal, projects } from '@/constants/content'

export function About() {
  return (
    <section id="about" className="border-y border-border bg-surface/40 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div><p className="eyebrow text-accent">04 / Beyond the job title</p><h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.04em]">A builder with<br />a systems perspective.</h2></div>
        <div>
          <p className="text-base leading-8 text-text-muted">My path has taken me through event technology, education, creator analytics, and enterprise AI. Across those domains, I’ve built interfaces, backend services, integrations, and cloud systems—and led a team of six engineers.</p>
          <p className="mt-4 text-base leading-8 text-text-muted">I’m looking for a full-time Forward Deployed Engineer role where I can combine that breadth with hands-on delivery: understand a complex requirement, design a workable solution, and see it through to production.</p>
          <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">Read my résumé <ArrowUpRight size={16} /></a>
          <details className="mt-8 border-t border-border pt-5">
            <summary className="text-sm font-medium">Earlier explorations · VR, tooling & game development</summary>
            <div className="mt-6 space-y-6">
              {projects.map(project => (
                <article key={project.title} className="flex flex-col gap-4 sm:flex-row">
                  <img src={project.image} alt="" loading="lazy" className="aspect-video w-full rounded-sm object-cover sm:w-28 sm:self-start" />
                  <div><h3 className="text-sm font-semibold">{project.title}</h3><p className="mt-1 text-xs leading-6 text-text-muted" dangerouslySetInnerHTML={{ __html: project.description }} />{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-accent">View source <ArrowUpRight size={12} /></a>}</div>
                </article>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
