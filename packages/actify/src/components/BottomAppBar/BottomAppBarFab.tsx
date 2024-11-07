import React from 'react'
import clsx from 'clsx'
import styles from './bottom-app-bar.module.css'

interface BottomAppBarFabProps extends React.ComponentProps<'div'> {}

const BottomAppBarFab = ({
  children,
  className,
  ...rest
}: BottomAppBarFabProps) => {
  return (
    <div {...rest} className={clsx(styles['fab'], className)}>
      {children}
    </div>
  )
}

export { BottomAppBarFab }
