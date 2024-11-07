'use client'

import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing
} from 'react-aria'
import React, { useId } from 'react'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './icon-button.module.css'

type IconButtonProps = {
  ripple?: boolean
  type?: 'submit' | 'reset' | 'button'
  variant?: 'standard' | 'outlined' | 'filled' | 'filled-tonal'
} & Omit<React.ComponentProps<'button'>, 'disabled'> &
  AriaButtonProps

const IconButton = (props: IconButtonProps) => {
  const { id, ref, ripple = true, children, className, isDisabled } = props

  const buttonRef = ref || React.useRef(null)
  const { buttonProps } = useButton(
    props,
    buttonRef as React.RefObject<HTMLButtonElement>
  )
  const iconButtonId = id || `actify-icon-button${useId()}`

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      ref={buttonRef}
      id={iconButtonId}
      {...mergeProps(buttonProps, focusProps)}
      className={clsx(
        styles['btn'],
        isDisabled && styles['text-outline'],
        className
      )}
    >
      {/* FocusRing */}
      {isFocusVisible && <FocusRing />}
      {ripple && <Ripple id={iconButtonId} disabled={isDisabled} />}
      {children}
      <span className={styles['icon-button']} />
    </button>
  )
}

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
