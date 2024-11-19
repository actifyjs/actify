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
import styles from './filled-field.module.css'

type OutlinedFieldProps = React.ComponentProps<'button'> & AriaButtonProps

const FilledField = (props: OutlinedFieldProps) => {
  const { ref, children } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, buttonRef)
  const { hoverProps, isHovered } = useHover(props)
  const { focusProps, isFocused } = useFocusRing()

  return (
    <div className={styles['filled-field']}>
      {/* field */}
      <div className={styles['field']}>
        {/* container-overflow */}
        <div className={styles['container-overflow']}>
          {/* trigger button */}
          <button
            ref={ref || buttonRef}
            className={styles['trigger-button']}
            {...mergeProps(buttonProps, hoverProps, focusProps)}
          >
            {children}
          </button>
          {/* background */}
          <span
            className={clsx(
              styles['background'],
              isHovered && styles['hovered']
            )}
          />
          {/* state-layer */}
          <span className={styles['state-layer']} />
          {/* active-indicator */}
          <span
            className={clsx(
              styles['active-indicator'],
              isFocused && styles['focused']
            )}
          />
        </div>
      </div>
    </div>
  )
}

export { FilledField }
