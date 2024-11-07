'use client'

import { Elevation } from './../Elevation'
import React from 'react'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './card.module.css'

interface CardProps extends React.ComponentProps<'div'> {
  ripple?: boolean
  elevation?: number
  variant?: 'elevated' | 'filled' | 'outlined'
}

const Card = (props: CardProps) => {
  const {
    id,
    ripple = false,
    variant = 'elevated',
    elevation = 1,
    children,
    className,
    ...rest
  } = props

  const cardId = id || `actify-card${React.useId()}`

  return (
    <div {...rest} className={clsx(styles['root'], styles[variant], className)}>
      <div className={styles['card']}>{children}</div>
      {ripple && <Ripple id={cardId} />}
      {variant === 'elevated' && (
        <Elevation className={`[--md-elevation-level:${elevation}]`} />
      )}
    </div>
  )
}

Card.displayName = 'Actify.Card'

export { Card }
