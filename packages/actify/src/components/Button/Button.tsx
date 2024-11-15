'use client'

import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing
} from 'react-aria'
import React, { useId } from 'react'

import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import { StyleProps } from '../../utils'
import buttons from './styles/button.module.css'
import clsx from 'clsx'
import colors from './styles/color.module.css'
import variants from './styles/variant.module.css'

interface ButtonProps extends AriaButtonProps, StyleProps {
  ref?: React.RefObject<HTMLButtonElement | null>
  ripple?: boolean
  asLink?: boolean
  trailingIcon?: boolean
  popoverTarget?: string
  popoverTargetAction?: 'show' | 'toggle' | 'hide'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
}

const Button = (props: ButtonProps) => {
  const _buttonRef = React.useRef<HTMLButtonElement>(null)
  const {
    id,
    ref = _buttonRef,
    style,
    asLink,
    ripple = true,
    color = 'primary',
    variant = 'elevated',
    isDisabled = false,
    className,
    children
  } = props

  const { buttonProps } = useButton(props, ref)

  const buttonId = id || `actify-button${useId()}`

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      id={buttonId}
      style={style}
      className={clsx(
        buttons['btn'],
        colors[color],
        variants[variant],
        isDisabled && buttons['disabled'],
        className
      )}
      ref={ref}
      {...mergeProps(asLink ? null : buttonProps, focusProps)}
    >
      <div className={buttons['button']}>
        <span className={buttons['background']} />
        <span className={buttons['touch']} />
        <span className={buttons['label']}>{children}</span>
        {variant == 'outlined' && <div className={buttons['outline']} />}
        {/* Elevation */}
        <Elevation disabled={isDisabled} />
        {/* FocusRing */}
        {isFocusVisible && <FocusRing />}
        {/* Ripple */}
        {ripple && <Ripple id={buttonId} disabled={isDisabled} />}
      </div>
    </button>
  )
}

Button.displayName = 'Actify.Button'

export { Button }
