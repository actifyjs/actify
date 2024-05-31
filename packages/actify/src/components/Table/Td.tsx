'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'px-3 py-2'
})

const Td = ({ className, children }: React.ComponentProps<'td'>) => {
  return <td className={root({ className })}>{children}</td>
}

export { Td }
