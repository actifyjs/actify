import './icon.css'

import React from 'react'
import clsx from 'clsx'

interface IconProps extends React.ComponentProps<'span'> {}
const Icon = ({ className, children, ...rest }: IconProps) => {
  const classes = clsx('a-icon', className)
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
      />
      <span {...rest} className={classes}>
        <i aria-hidden="true">{children}</i>
      </span>
    </React.Fragment>
  )
}

export { Icon }
