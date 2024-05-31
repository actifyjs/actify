'use client'

import React, { cloneElement, isValidElement } from 'react'

import { tv } from 'tailwind-variants'
import { useDrawer } from './DrawerContext'

const root = tv({
  base: ''
})

export interface DrawerActivatorProps extends React.ComponentProps<'div'> {
  asChild?: boolean
}

const DrawerActivator = (props: DrawerActivatorProps) => {
  const { setOpen } = useDrawer()
  const { ref, className, asChild, children, ...rest } = props

  const handleClick = () => {
    setOpen?.(true)
  }

  // `asChild` allows the user to pass any element as the activator
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ref,
      ...rest,
      ...children.props,
      role: 'button',
      onClick: handleClick
    })
  }

  return (
    <div
      {...rest}
      role="button"
      onClick={handleClick}
      className={root({ className })}
    >
      {children}
    </div>
  )
}

export { DrawerActivator }
