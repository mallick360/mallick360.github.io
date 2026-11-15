import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { personal, socialLinks } from '@/constants/content'
import { Button } from '@/components/Button'
import { EngineeringOverview } from '@/components/EngineeringOverview'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-12 pt-32 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute -right-64 top-[-20rem] h-[50rem] w-[50rem] rounded-full bg-accent/[0.055] blur-[100px]" />
      <div className="section-shell relative">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_color-mix(in_srgb,var(--color-accent)_33%,transparent)]" />
          <p className="eyebrow text-accent">Seeking full-time Forward Deployed Engineer roles</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.95fr] lg:items-center lg:gap-12">
          <div>
            <p className="mb-5 text-sm text-text-muted">Aashish Mallick / Full-stack engineer & systems architect</p>
            <h1 className="font-display text-[clamp(2.8rem,6vw,5.1rem)] font-medium leading-[1.07] tracking-[-0.065em]">
              I turn complex<br />requirements into<br /><span className="text-accent">working software.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-text-muted">From the interface to the infrastructure, I connect product engineering, system design, and applied AI to own delivery into production.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#work" icon={<ArrowDownRight size={16} />}>Explore selected work</Button>
              <Button href={personal.resumeUrl} target="_blank" variant="ghost" icon={<Download size={15} />}>Download résumé</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{socialLinks.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-accent">{link.label}<ArrowUpRight size={13} /></a>)}</div>
          </div>
          <EngineeringOverview />
        </div>
        <div className="mt-14 grid border-t border-border sm:grid-cols-3">
          {[
            ['01', '7+ years of engineering', 'Production software across four industries'],
            ['02', 'Full-stack to architecture', 'Interfaces, services, integrations & cloud'],
            ['03', 'Hands-on technical leadership', 'Led and mentored a six-engineer team'],
          ].map(([number, title, detail]) => <div key={number} className="flex gap-4 border-b border-border py-6 sm:pr-5"><span className="pt-1 font-mono text-[10px] text-accent">{number}</span><div><p className="font-display text-sm font-semibold">{title}</p><p className="mt-1 text-xs leading-6 text-text-faint">{detail}</p></div></div>)}
        </div>
      </div>
    </section>
  )
}
