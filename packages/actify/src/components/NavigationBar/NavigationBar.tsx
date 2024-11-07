'use client'

import { List } from './../Lists'
import React from 'react'
import clsx from 'clsx'
import styles from './navigation-bar.module.css'

interface NavigationBarProps extends React.ComponentProps<'div'> {}

const NavigationBar = (props: NavigationBarProps) => {
  const { children, className, ...rest } = props

  return (
    <div {...rest} className={clsx(styles['root'], className)}>
      <List className={styles['list']}>{children}</List>
    </div>
  )
}

NavigationBar.displayName = 'Actify.NavigationBar'

export { NavigationBar }
