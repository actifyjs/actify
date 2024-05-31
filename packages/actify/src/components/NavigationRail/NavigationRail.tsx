'use client'

import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: [
    'w-20',
    'flex',
    'bg-surface',
    'min-h-[540px]',
    'items-center',
    'justify-center'
  ]
})

interface NavigationRailProps extends React.ComponentProps<'div'> {}

const NavigationRail = (props: NavigationRailProps) => {
  const { children, className, ...rest } = props
  return (
    <div {...rest} className={variants({ className })}>
      {children}
    </div>
  )
}

NavigationRail.displayName = 'Actify.NavigationRail'

export { NavigationRail }
