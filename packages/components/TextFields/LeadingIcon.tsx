'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: '[margin-inline-end:4px] min-w-[48px] flex h-full relative items-center justify-center'
})

const LeadingIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  style,
  className,
  children
}) => {
  return (
    <div style={style} className={variants({ className })}>
      {children}
    </div>
  )
}

LeadingIcon.displayName = 'LeadingIcon'

export { LeadingIcon }
