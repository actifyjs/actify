import React from 'react'
import clsx from 'clsx'
import styles from './actify.module.css'

interface IconProps extends React.ComponentProps<'span'> {}
const Icon = ({ className, children, ...rest }: IconProps) => {
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
      />
      <span {...rest} className={clsx(styles['icon'], className)}>
        <i aria-hidden="true">{children}</i>
      </span>
    </React.Fragment>
  )
}

Icon.displayName = 'Actify.Icon'

export { Icon }
