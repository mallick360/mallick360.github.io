import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  href?: string
  target?: string
}

export function Button({
  variant = 'primary',
  icon,
  className,
  children,
  href,
  target,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-200',
    variant === 'primary'
      ? 'bg-accent text-bg hover:bg-accent-soft'
      : 'glass text-text hover:border-accent/60 hover:text-accent-soft',
    className,
  )

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {icon}
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
