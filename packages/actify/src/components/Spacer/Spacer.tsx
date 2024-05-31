'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'flex-1'
})

const Spacer = ({ className }: React.ComponentProps<'div'>) => {
  return <div className={root({ className })} />
}

Spacer.displayName = 'Actify.Spacer'

export { Spacer }
