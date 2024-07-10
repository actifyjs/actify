'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'px-4'
})

const Td = ({ className, children }: React.ComponentProps<'td'>) => {
  return <td className={root({ className })}>{children}</td>
}

export { Td }
