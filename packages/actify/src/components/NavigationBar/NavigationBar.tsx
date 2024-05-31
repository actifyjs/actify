'use client'

import { List } from './../Lists'
import React from 'react'
import { tv } from 'tailwind-variants'

const root = tv({
  base: [
    'min-h-20',
    'w-full',
    'bg-surface',
    'flex',
    'items-center',
    'justify-center'
  ]
})

interface NavigationBarProps extends React.ComponentProps<'div'> {}

const NavigationBar = (props: NavigationBarProps) => {
  const { children, className, ...rest } = props

  return (
    <div {...rest} className={root({ className })}>
      <List className="pt-3 pb-4 px-2 h-full w-full grid gap-2 grid-cols-4">
        {children}
      </List>
    </div>
  )
}

NavigationBar.displayName = 'Actify.NavigationBar'

export { NavigationBar }
