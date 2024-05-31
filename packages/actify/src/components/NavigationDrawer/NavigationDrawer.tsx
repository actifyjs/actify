'use client'

import { DrawerProvider, DrawerProviderProps } from './DrawerContext'

import { DrawerActivator } from './DrawerActivator'
import { DrawerContent } from './DrawerContent'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative'
})

interface DrawerProps extends DrawerProviderProps {
  className?: string
}

const Drawer = (props: DrawerProps) => {
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
