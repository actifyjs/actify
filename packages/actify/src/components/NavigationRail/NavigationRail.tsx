'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './navigation-rail.module.css'

interface NavigationRailProps extends React.ComponentProps<'div'> {}

const NavigationRail = (props: NavigationRailProps) => {
  const { children, className, ...rest } = props
  return (
    <div {...rest} className={clsx(styles['root'], className)}>
      {children}
    </div>
  )
}

NavigationRail.displayName = 'Actify.NavigationRail'

export { NavigationRail }
