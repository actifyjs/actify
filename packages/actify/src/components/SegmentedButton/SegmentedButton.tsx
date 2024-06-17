'use client'

import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from '../Ripple'
import clsx from 'clsx'
import styles from './actify.module.css'

interface SegmentedButtonProps
  extends Omit<React.ComponentProps<'button'>, 'children'> {
  label?: string
  selected?: boolean
  icon?: React.ReactNode
  noCheckmark?: boolean
}

const SegmentedButton = (props: SegmentedButtonProps) => {
  const {
    id,
    icon,
    label,
    disabled,
    selected,
    className,
    noCheckmark,
    ...rest
  } = props

  const buttonId = id || `actify-segmented-button${React.useId()}`

  const animState = React.useMemo(
    () => (selected ? 'selecting' : 'deselecting'),
    [selected]
  )

  const classes = clsx(
    styles['segmented-button'],
    icon && styles['with-icon'],
    styles[animState],
    selected ? styles['selected'] : styles['unselected'],
    label ? styles['with-label'] : styles['without-label'],
    noCheckmark ? styles['without-checkmark'] : styles['with-checkmark'],
    className
  )

  return (
    <div role="presentation" className={styles['host']}>
      <button
        {...rest}
        id={buttonId}
        disabled={disabled}
        className={classes}
        tabIndex={disabled ? -1 : 0}
      >
        <FocusRing id={buttonId} />
        <Ripple id={buttonId} disabled={disabled} />
        <span className={styles['outline']} />
        <span className={styles['leading']} aria-hidden="true">
          <span className={styles['graphic']}>
            <svg className={styles['checkmark']} viewBox="0 0 24 24">
              <path
                fill="none"
                className={styles['checkmark-path']}
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
              />
            </svg>
            {label && (
              <span className={styles['icon']} aria-hidden="true">
                {icon}
              </span>
            )}
          </span>
          {!label && (
            <span className={styles['icon']} aria-hidden="true">
              {icon}
            </span>
          )}
        </span>
        <span className={styles['label-text']}>{label}</span>
        <span className={styles['touch']} />
      </button>
    </div>
  )
}

export { SegmentedButton }
