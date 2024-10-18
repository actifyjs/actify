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
import buttons from './styles/button.module.css'
import clsx from 'clsx'
import colors from './styles/color.module.css'
import variants from './styles/variant.module.css'

type ButtonProps = {
  ripple?: boolean
  asLink?: boolean
  trailingIcon?: boolean
  popoverTarget?: string
  popoverTargetAction?: 'show' | 'toggle' | 'hide'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
} & React.ComponentProps<'button'> &
  AriaButtonProps

const Button = (props: ButtonProps) => {
  const {
    id,
    ref,
    style,
    asLink,
    ripple = true,
    color = 'primary',
    variant = 'elevated',
    disabled = false,
    className,
    children
  } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, buttonRef)

  const buttonId = id || `actify-button${useId()}`

  const classes = clsx(
    buttons['btn'],
    colors[color],
    variants[variant],
    disabled && buttons['disabled'],
    className
  )

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <div role="presentation" style={style} className={classes}>
      <Elevation disabled={disabled} />
      {variant == 'outlined' && <div className={buttons['outline']} />}
      <span className={buttons['background']} />
      {ripple && <Ripple id={buttonId} disabled={disabled} />}
      <button
        id={buttonId}
        disabled={disabled}
        ref={ref || buttonRef}
        className={buttons['button']}
        {...mergeProps(asLink ? null : buttonProps, focusProps)}
      >
        <span className={buttons['touch']} />
        <span className={buttons['label']}>{children}</span>
        {/* FocusRing */}
        {isFocusVisible && <FocusRing />}
      </button>
    </div>
  )
}

Button.displayName = 'Actify.Button'

export { Button }
