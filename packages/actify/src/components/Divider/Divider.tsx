import { SeparatorProps, useSeparator } from 'react-aria'

import React from 'react'
import { StyleProps } from '../../utils'
import clsx from 'clsx'
import styles from './divider.module.css'

interface DividerProps extends SeparatorProps, StyleProps {
  inset?: boolean
  insetStart?: boolean
  insetEnd?: boolean
}
const Divider = (props: DividerProps) => {
  const {
    className,
    inset,
    insetStart,
    insetEnd,
    orientation = 'horizontal'
  } = props

  const { separatorProps } = useSeparator(props)

  return (
    <div
      {...separatorProps}
      className={clsx(
        styles['divider'],
        inset && styles['inset'],
        insetStart && styles['inset-start'],
        insetEnd && styles['inset-end'],
        styles[orientation],
        className
      )}
    />
  )
}

export { Divider }
