'use client'

import React, { useMemo } from 'react'

import clsx from 'clsx'
import styles from './badges.module.css'

interface BadgeProps extends React.ComponentProps<'div'> {
  value?: string | number
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Badge = (props: BadgeProps) => {
  const { color = 'error', value = '', className, children, ...rest } = props

  const badge = useMemo(() => {
    if (parseInt(value.toString()) > 999) {
      return '999+'
    } else {
      return value
    }
  }, [value])

  const classes = clsx(styles['badge'], styles[color], className)

  return (
    <div className={styles['root']}>
      {children}
      <span className={classes} {...rest}>
        {badge}
      </span>
    </div>
  )
}

Badge.displayName = 'Actify.Badge'

export { Badge }
