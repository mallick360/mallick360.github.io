import { ArrowDown, ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { personal } from '@/constants/content'
import { Button } from '@/components/Button'

const layers = [
  { title: 'Product & interfaces', detail: 'React · Next.js · TypeScript', width: 'w-full' },
  { title: 'Services & integrations', detail: 'Python · Go · APIs · Permissions', width: 'w-[92%]' },
  { title: 'Intelligence & data', detail: 'AI agents · RAG · SQL · Kafka', width: 'w-[84%]' },
  { title: 'Infrastructure & operations', detail: 'AWS · GCP · Docker · Observability', width: 'w-[76%]' },
]

export function Hero() {
  return (
    <section id="home" className="px-6 pb-14 pt-36 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {personal.availability}
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5 text-text-muted">Full-stack engineering / Systems & solution architecture</p>
            <h1 className="font-display text-[clamp(2.8rem,5.2vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
              From complex<br />requirements to<br /><span className="text-accent">production systems.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-text-muted">{personal.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#work" icon={<ArrowDownRight size={16} />}>Explore my work</Button>
              <Button variant="ghost" href={personal.resumeUrl} target="_blank" icon={<Download size={16} />}>Download résumé</Button>
            </div>
            <a href="#experience" className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent">View experience <ArrowUpRight size={15} /></a>
          </div>
          <figure className="blueprint relative border border-border p-6 sm:p-8">
            <figcaption className="mb-10 flex justify-between gap-3">
              <span className="eyebrow text-text-muted">01 / Span of ownership</span>
              <ArrowDownRight size={20} className="text-accent" />
            </figcaption>
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <div key={layer.title} className={`relative border border-[#bec8b7] bg-surface px-4 py-4 shadow-[3px_3px_0_#d9dfd3] ${layer.width}`}>
                  <span className="absolute right-3 top-3 font-mono text-[10px] text-text-faint">0{i + 1}</span>
                  <p className="pr-3 font-display text-sm font-semibold">{layer.title}</p>
                  <p className="mt-1 text-[11px] leading-5 text-text-muted">{layer.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[#cbd3c4] pt-5">
              <ArrowDown size={16} className="text-accent" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Architecture → Implementation → Operation</p>
            </div>
          </figure>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 border-y border-border py-7 md:grid-cols-4">
          {[
            ['7+ years', 'Building production software'],
            ['280M+', 'Creator profiles · Hyp.io platform'],
            ['6 engineers', 'Team led & mentored'],
            ['AWS + GCP', 'Cloud architecture & delivery'],
          ].map(([value, label]) => (
            <div key={label}><p className="font-display text-2xl font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs leading-5 text-text-muted">{label}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
