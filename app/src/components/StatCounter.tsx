import type { Achievement } from '@/types/content'
import { useCountUp } from '@/hooks/useCountUp'

function formatValue(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2)
}

export function StatCounter({ value, suffix, label }: Achievement) {
  const { ref, value: animated } = useCountUp(value)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="glass rounded-2xl p-8 text-center">
      <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
        {formatValue(animated)}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </div>
  )
}
