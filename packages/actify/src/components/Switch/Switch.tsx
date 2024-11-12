'use client'

import {
  AriaCheckboxProps,
  mergeProps,
  useFocusRing,
  useSwitch
} from 'react-aria'
import React, { useId } from 'react'

import { FocusRing } from './../FocusRing'
import { Label } from '../Label'
import { Ripple } from './../Ripple'
import { VisuallyHidden } from '../VisuallyHidden'
import clsx from 'clsx'
import styles from './switch.module.css'
import { useToggleState } from 'react-stately'

interface SwitchProps extends AriaCheckboxProps {
  icons?: boolean
  showOnlySelectedIcon?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Switch = (props: SwitchProps) => {
  const { id, icons, isDisabled, showOnlySelectedIcon, children } = props

  const state = useToggleState(props)
  const inputRef = React.useRef(null)

  const { inputProps, labelProps } = useSwitch(props, state, inputRef)
  const { isFocusVisible, focusProps } = useFocusRing()

  const switchId = id || `actify-switch${useId()}`

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
      className={clsx(styles['host'], isDisabled && styles['disabled'])}
    >
      <div
        className={clsx(
          styles['switch'],
          isDisabled && styles['disabled'],
          state.isSelected ? styles['selected'] : styles['unselected']
        )}
      >
        <VisuallyHidden>
          <input
            role="switch"
            id={switchId}
            ref={inputRef}
            className={styles['touch']}
            {...mergeProps(inputProps, focusProps)}
          />
        </VisuallyHidden>
        {isFocusVisible && <FocusRing />}
        <span className={styles['track']}>
          <span className={styles['handle-container']}>
            <Ripple
              id={switchId}
              disabled={isDisabled}
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
      <Label {...labelProps} id={switchId}>
        {children}
      </Label>
    </div>
  )
}

Switch.displayName = 'Actify.Switch'

export { Switch }
