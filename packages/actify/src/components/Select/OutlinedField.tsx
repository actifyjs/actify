'use client'

import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useHover
} from 'react-aria'

import React from 'react'
import clsx from 'clsx'
import styles from './outlined-field.module.css'

type OutlinedFieldProps = React.ComponentProps<'button'> & AriaButtonProps

const OutlinedField = (props: OutlinedFieldProps) => {
  const { ref, children } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, buttonRef)
  const { hoverProps, isHovered } = useHover(props)
  const { focusProps, isFocused } = useFocusRing()

  return (
    <div className={styles['outlined-field']}>
      {/* outline */}
      <span
        className={clsx(
          styles['outline'],
          isHovered && styles['hovered'],
          isFocused && styles['focused']
        )}
      />

      {/* trigger button */}
      <button
        ref={ref || buttonRef}
        className={styles['trigger-button']}
        {...mergeProps(buttonProps, hoverProps, focusProps)}
      >
        {children}
      </button>
    </div>
  )
}

export { OutlinedField }
