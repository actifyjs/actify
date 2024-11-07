'use client'

import { DrawerProvider, DrawerProviderProps } from './DrawerContext'

import React from 'react'

interface NavigationDrawerProps extends DrawerProviderProps {
  className?: string
  style?: React.CSSProperties
}

const NavigationDrawer = (props: NavigationDrawerProps) => {
  const { className, children, ...rest } = props

  return (
    <DrawerProvider {...rest}>
      <div className={className} style={{ position: 'relative' }}>
        {children}
      </div>
    </DrawerProvider>
  )
}

NavigationDrawer.displayName = 'Actify.NavigationDrawer'

export { NavigationDrawer }
