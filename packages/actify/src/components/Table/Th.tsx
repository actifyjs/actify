'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'px-3 py-2'
})

const Th = ({ className, children }: React.ComponentProps<'th'>) => {
  return <th className={root({ className })}>{children}</th>
}

export { Th }
