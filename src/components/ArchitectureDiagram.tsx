import { useId } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

type DiagramNode = { title: string; detail: string }
type DiagramLayer = { label: string; nodes: DiagramNode[] }

const architectures: Record<string, { layers: DiagramLayer[]; foundation: string; description: string }> = {
  hypio: {
    layers: [
      { label: 'Experience', nodes: [{ title: 'Product interfaces', detail: 'React · Discovery & analytics' }, { title: 'Enterprise workflows', detail: 'Contracts · Credits & billing' }] },
      { label: 'Application', nodes: [{ title: 'Backend services', detail: 'Django · Go · APIs' }, { title: 'Access & integrations', detail: 'ABAC · OAuth 2.0' }] },
      { label: 'Data & external systems', nodes: [{ title: 'Platform data', detail: 'PostgreSQL' }, { title: 'Meta Graph API', detail: 'Social analytics integration' }] },
    ],
    foundation: 'AWS infrastructure · Security · Production operations',
    description: 'Product interfaces and enterprise workflows connect through backend services, access controls, and integrations to platform data and the Meta Graph API. AWS infrastructure supports delivery.',
  },
  'healthcare-ai': {
    layers: [
      { label: 'Knowledge & access', nodes: [{ title: 'Enterprise knowledge', detail: 'Sensitive healthcare context' }, { title: 'Access policies', detail: 'Fine-grained permissions' }] },
      { label: 'AI application', nodes: [{ title: 'Secure retrieval', detail: 'RAG pipelines' }, { title: 'Generation', detail: 'Gemini · Vertex AI' }] },
      { label: 'Delivery & assurance', nodes: [{ title: 'AI assistants', detail: 'Individual & team workflows' }, { title: 'Evaluation', detail: 'Quality · Latency · Reliability' }] },
    ],
    foundation: 'Google Cloud · Guardrails · Governance · Observability',
    description: 'Enterprise knowledge and access policies inform secure retrieval and generation with Gemini and Vertex AI. AI assistants are supported by evaluation, guardrails, governance, and observability on Google Cloud.',
  },
  coaching: {
    layers: [
      { label: 'Learning experience', nodes: [{ title: 'Representative', detail: 'Voice-based practice' }, { title: 'Training scenarios', detail: 'Conversation simulations' }] },
      { label: 'Real-time interaction', nodes: [{ title: 'Live conversation', detail: 'Gemini Live Audio' }, { title: 'Coaching workflow', detail: 'GenAI-powered training' }] },
      { label: 'Learning outcomes', nodes: [{ title: 'Practice simulations', detail: 'Conversational learning' }, { title: 'Personalized feedback', detail: 'Feedback for the learner' }] },
    ],
    foundation: 'Real-time voice interaction · Conversational practice · Feedback',
    description: 'Representatives practice training scenarios through a Gemini Live Audio conversation and a coaching workflow, enabling conversational learning simulations and personalized feedback.',
  },
}

export function ArchitectureDiagram({ studyId }: { studyId: string }) {
  const uid = useId().replace(/:/g, '')
  const diagram = architectures[studyId]
  if (!diagram) return null

  return (
    <figure className="grid-paper mt-7 overflow-hidden rounded-xl border border-border bg-bg/60">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 sm:px-5">
        <span className="eyebrow text-accent">System architecture</span>
        <span className="text-[10px] text-text-faint">Conceptual view</span>
      </figcaption>
      <svg viewBox="0 0 660 288" role="img" aria-labelledby={`${uid}-title ${uid}-desc`} className="hidden w-full sm:block">
        <title id={`${uid}-title`}>Conceptual system architecture</title>
        <desc id={`${uid}-desc`}>{diagram.description} Connections indicate related system layers, rather than exact request paths.</desc>
        <defs><marker id={`${uid}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" /></marker></defs>
        {[0, 1].map(i => {
          const x = 208 + i * 220
          return <g key={i} fill="none" stroke="var(--color-accent)" strokeOpacity=".65" strokeWidth="1.2">
            <path d={`M ${x} 93 H ${x + 15} V 137 M ${x} 181 H ${x + 15} V 137 H ${x + 27}`} />
            <path d={`M ${x + 27} 137 H ${x + 29} V 93 H ${x + 43}`} markerEnd={`url(#${uid}-arrow)`} />
            <path d={`M ${x + 29} 137 V 181 H ${x + 43}`} markerEnd={`url(#${uid}-arrow)`} />
            <circle cx={x + 15} cy="137" r="2.5" fill="var(--color-accent)" stroke="none" />
          </g>
        })}
        {diagram.layers.map((layer, i) => <g key={layer.label}>
          <text x={30 + i * 220} y="32" fill="var(--color-text-faint)" fontSize="9" fontFamily="var(--font-body)" letterSpacing="1">0{i + 1} / {layer.label.toUpperCase()}</text>
          {layer.nodes.map((node, j) => <g key={node.title}>
            <rect x={30 + i * 220} y={58 + j * 88} width="178" height="70" rx="7" fill="var(--color-surface)" stroke={i === 1 ? 'var(--color-accent)' : 'var(--color-border)'} strokeOpacity={i === 1 ? '.6' : '1'} />
            <text x={43 + i * 220} y={86 + j * 88} fill="var(--color-text)" fontSize="11" fontWeight="500" fontFamily="var(--font-body)">{node.title}</text>
            <text x={43 + i * 220} y={107 + j * 88} fill="var(--color-text-muted)" fontSize="9" fontFamily="var(--font-body)">{node.detail}</text>
          </g>)}
        </g>)}
        <path d="M 30 232 H 648" stroke="var(--color-border)" strokeDasharray="4 4" />
        <text x="339" y="259" textAnchor="middle" fill="var(--color-accent)" fontSize="10" fontFamily="var(--font-body)">{diagram.foundation}</text>
      </svg>
      <div className="p-4 sm:hidden">
        <ol className="space-y-3">{diagram.layers.map((layer, i) => <li key={layer.label}>
          {i > 0 && <ArrowDown size={16} aria-hidden className="mx-auto mb-3 text-accent" />}
          <p className="eyebrow mb-2 text-text-faint">0{i + 1} / {layer.label}</p>
          <div className="grid grid-cols-2 gap-2">{layer.nodes.map(node => <div key={node.title} className={`rounded-lg border bg-surface px-3 py-4 ${i === 1 ? 'border-accent/50' : 'border-border'}`}><p className="text-xs font-medium leading-5">{node.title}</p><p className="mt-1 text-[10px] leading-5 text-text-muted">{node.detail}</p></div>)}</div>
        </li>)}</ol>
        <p className="mt-4 border-t border-dashed border-border pt-4 text-center text-[10px] leading-5 text-accent">{diagram.foundation}</p>
      </div>
      <p className="flex items-start gap-2 border-t border-border px-4 py-3 text-[10px] leading-5 text-text-faint sm:px-5"><ArrowRight size={12} aria-hidden className="mt-1 shrink-0 text-accent" />Related system layers, summarized from professional experience.</p>
    </figure>
  )
}
