'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'border-b text-xs bg-inverse-surface/25'
})

const Thead: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
  style,
  className,
  children
}) => {
  return (
    <thead style={style} className={variants({ className })}>
      {children}
    </thead>
  )
}

Thead.displayName = 'Thead'

export { Thead }
