import React from 'react'
import clsx from 'clsx'
import styles from './actify.module.css'

interface DividerProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  inset?: boolean
  insetStart?: boolean
  insetEnd?: boolean
}
const Divider = (props: DividerProps) => {
  const { className, inset, insetStart, insetEnd, ...rest } = props

  const classes = clsx(
    styles['divider'],
    inset && styles['inset'],
    insetStart && styles['inset-start'],
    insetEnd && styles['inset-end']
  )

  return <div {...rest} className={classes} />
}

export { Divider }
