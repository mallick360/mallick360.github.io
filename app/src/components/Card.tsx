import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  id?: string
  onClick?: () => void
}

export function Card({ children, className, hover = true, id, onClick }: CardProps) {
  return (
    <motion.div
      id={id}
      onClick={onClick}
      whileHover={hover ? { y: -6, borderColor: 'var(--color-accent)' } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn('glass rounded-2xl p-6', className)}
    >
      {children}
    </motion.div>
  )
}
