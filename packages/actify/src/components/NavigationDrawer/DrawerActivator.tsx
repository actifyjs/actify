'use client'

import React, { cloneElement, isValidElement } from 'react'

import { useDrawer } from './DrawerContext'

export interface DrawerActivatorProps extends React.ComponentProps<'div'> {
  asChild?: boolean
}

const DrawerActivator = (props: DrawerActivatorProps) => {
  const { setOpen } = useDrawer()
  const { ref, className, asChild, children, ...rest } = props

  const handlePress = () => {
    setOpen?.(true)
  }

  // `asChild` allows the user to pass any element as the activator
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ref,
      ...rest,
      // @ts-ignore
      ...children.props,
      role: 'button',
      onPress: handlePress
    })
  }

  return (
    <div {...rest} role="button" onClick={handlePress}>
      {children}
    </div>
  )
}

export { DrawerActivator }
