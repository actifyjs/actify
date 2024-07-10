'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'px-4'
})

const Th = ({ className, children }: React.ComponentProps<'th'>) => {
  return <th className={root({ className })}>{children}</th>
}

export { Th }
