'use client'

import React, { useEffect, useId, useState } from 'react'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './actify.module.css'

interface SwitchProps
  extends Omit<React.ComponentProps<'input'>, 'checked' | 'defaultChecked'> {
  icons?: boolean
  selected?: boolean
  defaultSelected?: boolean
  showOnlySelectedIcon?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Switch = (props: SwitchProps) => {
  const {
    id,
    icons,
    color,
    onChange,
    className,
    disabled = false,
    selected,
    defaultSelected,
    showOnlySelectedIcon,
    ...rest
  } = props

  const switchId = id || `actify-switch${useId()}`

  const [internalChecked, setInternalChecked] = useState(
    defaultSelected ?? false
  )

  const isControlled = selected !== undefined

  useEffect(() => {
    if (isControlled) {
      setInternalChecked(selected)
    }
  }, [selected, isControlled])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked
    if (!isControlled) {
      setInternalChecked(newChecked)
    }
    onChange?.(event)
  }

  const shouldShowIcons = () => {
    return icons || showOnlySelectedIcon
  }

  const renderIcons = () => {
    return (
      <div className={styles['icons']}>
        <svg viewBox="0 0 24 24" className={clsx(styles['icon'], styles['on'])}>
          <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>

        {!showOnlySelectedIcon && (
          <svg
            viewBox="0 0 24 24"
            className={clsx(styles['icon'], styles['off'])}
          >
            <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
          </svg>
        )}
      </div>
    )
  }

  return (
    <div
      role="presentation"
      className={clsx(styles['host'], disabled && styles['disabled'])}
    >
      <div
        className={clsx(
          styles['switch'],
          disabled && styles['disabled'],
          internalChecked ? styles['selected'] : styles['unselected']
        )}
      >
        <input
          {...rest}
          role="switch"
          id={switchId}
          type="checkbox"
          disabled={disabled}
          checked={internalChecked}
          onChange={handleChange}
          className={styles['touch']}
        />
        <FocusRing id={switchId} />
        <span className={styles['track']}>
          <span className={styles['handle-container']}>
            <Ripple
              id={switchId}
              disabled={disabled}
              style={{
                inset: 'unset',
                borderRadius:
                  'var(--md-switch-state-layer-shape,var(--md-sys-shape-corner-full, 9999px))',
                width: 'var(--md-switch-state-layer-size, 40px)',
                height: 'var(--md-switch-state-layer-size, 40px)'
              }}
            />
            <span
              className={clsx([icons && styles['with-icon'], styles['handle']])}
            >
              {shouldShowIcons() && renderIcons()}
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}

Switch.displayName = 'Actify.Switch'

export { Switch }
