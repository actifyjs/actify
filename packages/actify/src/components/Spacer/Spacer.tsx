'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex-1'
})

const Spacer = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={variants({ className })}></div>
}

Spacer.displayName = 'Actify.Spacer'

export default Spacer
