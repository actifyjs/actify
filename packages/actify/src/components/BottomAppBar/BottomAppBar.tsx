import { Elevation } from './../Elevation'
import React from 'react'
import clsx from 'clsx'
import styles from './bottom-app-bar.module.css'

interface BottomAppBarProps extends React.ComponentProps<'div'> {}
const BottomAppBar = ({ className, children }: BottomAppBarProps) => {
  return (
    <div className={clsx(styles['root'], className)}>
      {children}
      <Elevation className="[--md-elevation-level:2]" />
    </div>
  )
}

BottomAppBar.displayName = 'Actify.BottomAppBar'

export { BottomAppBar }
