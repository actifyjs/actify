'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'border-t border-outline-variant-variant text-xs bg-inverse-surface/25'
})

const Tfoot = ({ className, children }: React.ComponentProps<'tfoot'>) => {
  return <tfoot className={root({ className })}>{children}</tfoot>
}

Tfoot.displayName = 'tfoot'

export { Tfoot }
