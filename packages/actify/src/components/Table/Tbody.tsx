'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: ''
})

const Tbody = ({ className, children }: React.ComponentProps<'tbody'>) => {
  return <tbody className={root({ className })}>{children}</tbody>
}

Tbody.displayName = 'Tbody'

export { Tbody }
