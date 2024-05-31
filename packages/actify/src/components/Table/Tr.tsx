'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: ''
})

const Tr = ({ className, children }: React.ComponentProps<'tr'>) => {
  return <tr className={root({ className })}>{children}</tr>
}

export { Tr }
