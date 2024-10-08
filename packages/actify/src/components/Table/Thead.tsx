'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'border-b text-xs bg-surface'
})

const Thead = ({ className, children }: React.ComponentProps<'thead'>) => {
  return <thead className={root({ className })}>{children}</thead>
}

Thead.displayName = 'Thead'

export { Thead }
