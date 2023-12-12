'use client'
import React from 'react'
import { tv } from 'tailwind-variants'
import { DrawerContent } from './DrawerContent'
import { DrawerActivator } from './DrawerActivator'
import { DrawerProvider, DrawerProviderProps } from './DrawerContext'

const variants = tv({
  base: 'relative'
})

type DrawerProps = DrawerProviderProps & {
  className?: string
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <DrawerProvider {...rest}>
      <div className={variants({ className })}>{children}</div>
    </DrawerProvider>
  )
}

export default Object.assign(Drawer, {
  Content: DrawerContent,
  Activator: DrawerActivator
})
