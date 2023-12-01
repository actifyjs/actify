'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

import { DrawerContent } from './DrawerContent'
import { DrawerActivator } from './DrawerActivator'
import { DrawerProvider } from './DrawerContext'

const variants = tv({
  base: 'relative'
})

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  placement: 'left' | 'right' | 'top' | 'bottom'
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DrawerProvider value={{ ...rest }}>
      <div ref={ref} {...rest} className={variants({ className })}>
        {children}
      </div>
    </DrawerProvider>
  )
})

Drawer.defaultProps = {
  placement: 'left'
}

export default Object.assign(Drawer, {
  Content: DrawerContent,
  Activator: DrawerActivator
})
