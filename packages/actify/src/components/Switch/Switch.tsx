'use client'

import './switch.css'

import React, { useId, useState } from 'react'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'

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

  React.useEffect(() => {
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
      <div className="a-switch-icons">
        <svg viewBox="0 0 24 24" className={clsx('a-switch-icon', 'on')}>
          <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>

        {!showOnlySelectedIcon && (
          <svg viewBox="0 0 24 24" className={clsx('a-switch-icon', 'off')}>
            <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
          </svg>
        )}
      </div>
    )
  }

  return (
    <div
      role="presentation"
      className={clsx('a-switch-host', {
        disabled
      })}
    >
      <div
        className={clsx(
          'a-switch',
          {
            disabled
          },
          internalChecked ? 'selected' : 'unselected'
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
          className="a-switch-touch"
        />
        <FocusRing id={switchId} />
        <span className="a-switch-track">
          <span className="a-switch-handle-container">
            <Ripple
              id={switchId}
              disabled={disabled}
              style={{
                borderRadius:
                  'var(--md-switch-state-layer-shape,var(--md-sys-shape-corner-full, 9999px))',
                width: 'var(--md-switch-state-layer-size, 40px)',
                height: 'var(--md-switch-state-layer-size, 40px)',
                inset: 'unset'
              }}
            />
            <span className={clsx([icons && 'with-icon', 'a-switch-handle'])}>
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
