import React from 'react'
import clsx from 'clsx'
import styles from './bottom-app-bar.module.css'

interface BottomAppBarIconsProps extends React.ComponentProps<'div'> {}

const BottomAppBarIcons = ({
  children,
  className,
  ...rest
}: BottomAppBarIconsProps) => {
  return (
    <div {...rest} className={clsx(styles['icons'], className)}>
      {children}
    </div>
  )
}

export { BottomAppBarIcons }
