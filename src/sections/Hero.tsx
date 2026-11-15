import { ArrowDown, ArrowUpRight, Braces, Database, Layers3, Network } from 'lucide-react'
import { personal } from '@/constants/content'
import { Button } from '@/components/Button'

const capabilities = [
  { icon: Layers3, title: 'Product', detail: 'Interfaces & workflows', stack: 'React / Next.js' },
  { icon: Braces, title: 'Services', detail: 'APIs & integrations', stack: 'Python / Go' },
  { icon: Database, title: 'Intelligence', detail: 'AI & data systems', stack: 'Gemini / SQL' },
  { icon: Network, title: 'Infrastructure', detail: 'Deploy & operate', stack: 'AWS / GCP' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-0 pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute right-[-12rem] top-16 h-[35rem] w-[35rem] rounded-full bg-accent/[0.035] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <p className="eyebrow text-text-muted">Aashish Mallick / Engineering portfolio</p>
          <span className="inline-flex items-center gap-2 text-xs text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Seeking full-time FDE roles</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="eyebrow mb-6 text-accent">Full-stack engineer · Systems thinker</p>
            <h1 className="font-display text-[clamp(3rem,6.7vw,6rem)] font-medium leading-[0.98] tracking-[-0.065em]">
              Complex<br />problems.<br /><span className="text-accent">Working<br />systems.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-8 text-text-muted">{personal.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#work" icon={<ArrowDown size={15} />}>Explore my work</Button>
              <Button variant="ghost" href={personal.resumeUrl} target="_blank" icon={<ArrowUpRight size={15} />}>View résumé</Button>
            </div>
          </div>
          <div className="lg:pt-5">
            <figure className="blueprint overflow-hidden rounded-xl border border-border">
              <figcaption className="flex items-center justify-between border-b border-border bg-surface/90 px-5 py-4">
                <span className="eyebrow text-text-muted">System view / My span of ownership</span><span className="font-mono text-[10px] text-accent">01—04</span>
              </figcaption>
              <div className="px-5 py-7 sm:px-8">
                <div className="mx-auto w-fit rounded-full border border-accent/40 bg-bg px-5 py-2 text-xs text-accent">Business requirements</div>
                <div aria-hidden className="mx-auto h-6 w-px bg-accent/40" />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {capabilities.map(({ icon: Icon, title, detail, stack }, index) => (
                    <div key={title} className="system-node rounded-lg p-4">
                      <div className="flex items-center justify-between"><Icon size={19} strokeWidth={1.4} className="text-accent" /><span className="font-mono text-[10px] text-text-faint">0{index + 1}</span></div>
                      <h2 className="mt-5 font-display text-sm font-medium sm:text-base">{title}</h2>
                      <p className="mt-1 text-[11px] leading-5 text-text-muted">{detail}</p>
                      <p className="mt-3 border-t border-border pt-3 font-mono text-[9px] text-text-faint sm:text-[10px]">{stack}</p>
                    </div>
                  ))}
                </div>
                <div aria-hidden className="mx-auto h-6 w-px bg-accent/40" />
                <div className="mx-auto w-fit rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-xs text-accent">Production delivery</div>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border bg-surface/90 px-5 py-4 text-[10px] text-text-faint"><span>Design. Build. Integrate. Operate.</span><ArrowUpRight size={14} className="text-accent" /></div>
            </figure>
            <p className="mt-5 max-w-sm text-xs leading-6 text-text-faint">Full-stack depth, solution architecture, and hands-on delivery across the boundaries of a system.</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 border-y border-border md:grid-cols-4">
          {[
            ['7+', 'Years building production software'],
            ['280M+', 'Creator profiles · Hyp.io platform'],
            ['06', 'Engineers led & mentored'],
            ['02', 'Cloud platforms · AWS & GCP'],
          ].map(([value, label], index) => (
            <div key={label} className={`py-7 pr-4 ${index % 2 === 1 ? 'border-l border-border pl-6' : ''} ${index === 2 ? 'md:border-l md:border-border md:pl-6' : ''}`}><p className="font-display text-4xl font-medium tracking-tight text-accent">{value}</p><p className="mt-2 text-[11px] leading-5 text-text-muted">{label}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
