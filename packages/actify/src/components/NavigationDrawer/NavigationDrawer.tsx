'use client'

import { DrawerProvider, DrawerProviderProps } from './DrawerContext'

import { DrawerActivator } from './DrawerActivator'
import { DrawerContent } from './DrawerContent'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative'
})

interface NavigationDrawerProps extends DrawerProviderProps {
  className?: string
}

const NavigationDrawer = (props: NavigationDrawerProps) => {
  const { className, children, ...rest } = props

  return (
    <DrawerProvider {...rest}>
      <div className={variants({ className })}>{children}</div>
    </DrawerProvider>
  )
}

NavigationDrawer.displayName = 'Actify.NavigationDrawer'

export default Object.assign(NavigationDrawer, {
  Content: DrawerContent,
  Activator: DrawerActivator
})
