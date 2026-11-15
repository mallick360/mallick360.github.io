import { Fragment, useEffect, useState } from 'react'
import { Check, Palette, X } from 'lucide-react'

const warmVariants = [
  { name: 'Peach', color: '#ffbf9b', soft: '#ffdfcc' },
  { name: 'Apricot', color: '#ffc58a', soft: '#ffe1bc' },
  { name: 'Terracotta', color: '#eaa084', soft: '#f7ccb8' },
  { name: 'Copper', color: '#dfa77c', soft: '#f2d0ae' },
  { name: 'Burnt orange', color: '#ef9564', soft: '#ffc7a6' },
  { name: 'Persimmon', color: '#ff8e70', soft: '#ffc3b2' },
  { name: 'Honey', color: '#e8bf70', soft: '#f7dfa9' },
  { name: 'Marigold', color: '#f5c451', soft: '#ffe49d' },
  { name: 'Saffron', color: '#f4af68', soft: '#ffd5a7' },
  { name: 'Warm red', color: '#f58b80', soft: '#fcc5bc' },
  { name: 'Dusty rose', color: '#e6a49b', soft: '#f5cfc8' },
  { name: 'Warm ivory', color: '#f0dfbd', soft: '#fff1d9' },
]

const variants = [
  { name: 'Ice blue', color: '#79c8ff', soft: '#bce4ff' },
  { name: 'Coral', color: '#ff9b85', soft: '#ffd0c5' },
  { name: 'Lime', color: '#c2e87b', soft: '#e0f5b5' },
  { name: 'Teal', color: '#6edbc5', soft: '#b3f2e5' },
  { name: 'Rose', color: '#efa0cc', soft: '#fad0e7' },
  { name: 'Electric blue', color: '#87a8ff', soft: '#c2d2ff' },
  { name: 'Cyan', color: '#67dfed', soft: '#b5f4fa' },
  { name: 'Emerald', color: '#62d99e', soft: '#a9efcb' },
  { name: 'Mint', color: '#b5f4d4', soft: '#d7ffe9' },
  { name: 'Lemon', color: '#eee47b', soft: '#faf4b8' },
  { name: 'Amber', color: '#f0b86e', soft: '#ffd399' },
  { name: 'Tangerine', color: '#ffa363', soft: '#ffd1b0' },
  { name: 'Salmon', color: '#ff8f97', soft: '#ffc4c8' },
  { name: 'Pink', color: '#f58fd2', soft: '#fbc3e9' },
  { name: 'Orchid', color: '#dca1f3', soft: '#efcffb' },
  { name: 'Lavender', color: '#ada8ff', soft: '#d0cdff' },
  { name: 'Periwinkle', color: '#a7baff', soft: '#d0daff' },
  { name: 'Sand', color: '#d8c6a4', soft: '#eee4d0' },
  { name: 'Silver', color: '#c6cdd8', soft: '#e4e8ef' },
  { name: 'Pearl', color: '#eeede5', soft: '#ffffff' },
  ...warmVariants,
]

const defaultIndex = variants.findIndex(variant => variant.name === 'Ice blue')

export function AccentPreview() {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState(defaultIndex)

  useEffect(() => {
    const root = document.documentElement
    const variant = variants[selected]
    root.style.setProperty('--color-accent', variant.color)
    root.style.setProperty('--color-accent-soft', variant.soft)
    return () => {
      root.style.removeProperty('--color-accent')
      root.style.removeProperty('--color-accent-soft')
    }
  }, [selected])

  return (
    <aside aria-label="Accent color preview" className="fixed bottom-4 right-4 z-50 w-[30rem] max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-bg/95 shadow-2xl shadow-black/50 backdrop-blur-md">
      <div className="flex items-center justify-between gap-8 px-4 py-3">
        <button type="button" onClick={() => setOpen(prev => !prev)} aria-expanded={open} aria-controls="accent-options" className="flex items-center gap-2 text-xs text-text"><Palette size={14} className="text-accent" />Accent preview<span className="text-text-faint">/ {variants[selected].name}</span></button>
        {open && <button type="button" onClick={() => setOpen(false)} aria-label="Collapse accent preview" className="text-text-faint hover:text-text"><X size={14} /></button>}
      </div>
      {open && <div id="accent-options" className="border-t border-border px-4 pb-4 pt-3">
        <div role="group" aria-label="Choose an accent color" className="grid max-h-[50dvh] grid-cols-2 gap-2 overflow-y-auto p-1 sm:grid-cols-3">
          {variants.map((variant, index) => <Fragment key={variant.name}>
            {index === variants.length - warmVariants.length && <p className="eyebrow col-span-full mt-3 border-t border-border pt-4 text-text-faint">Warm collection</p>}
            <button type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] transition-colors ${selected === index ? 'border-accent/60 bg-accent/10 text-text' : 'border-border text-text-muted hover:bg-surface'}`}>
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full" style={{ backgroundColor: variant.color }}>{selected === index && <Check size={10} strokeWidth={3} className="text-bg" />}</span>{variant.name}{index === defaultIndex && <span className="sr-only"> (saved default)</span>}
          </button></Fragment>)}
        </div>
        <p className="mt-3 text-[10px] leading-5 text-text-faint">Preview only. Ice blue stays the default; reload to reset.</p>
      </div>}
    </aside>
  )
}
