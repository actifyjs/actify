'use client'

import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps
} from 'react-aria-components'
import React, { useId } from 'react'
import { mergeProps, useButton, useFocusRing } from 'react-aria'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './icon-button.module.css'

interface IconButtonProps extends AriaButtonProps {
  ref?: React.RefObject<HTMLButtonElement | null>
  ripple?: boolean
  variant?: 'standard' | 'outlined' | 'filled' | 'filled-tonal'
}

const IconButton = (props: IconButtonProps) => {
  const { ref, ripple = true, children, className, isDisabled } = props

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <AriaButton
      ref={ref}
      {...mergeProps(props, focusProps)}
      className={clsx(
        styles['btn'],
        isDisabled && styles['text-outline'],
        className
      )}
    >
      {/* FocusRing */}
      {isFocusVisible && <FocusRing />}
      {/* Ripple */}
      {ripple && <Ripple id={props.id} disabled={isDisabled} />}
      <>{children}</>
      <span className={styles['icon-button']} />
    </AriaButton>
  )
}

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
