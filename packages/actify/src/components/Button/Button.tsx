'use client'

import React, { useId } from 'react'

import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import buttons from './styles/button.module.css'
import clsx from 'clsx'
import colors from './styles/color.module.css'
import variants from './styles/variant.module.css'

interface ButtonProps extends React.ComponentProps<'button'> {
  ripple?: boolean
  trailingIcon?: boolean
  popoverTarget?: string
  popoverTargetAction?: 'show' | 'toggle' | 'hide'
  type?: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
}

const Button = (props: ButtonProps) => {
  const {
    id,
    style,
    ripple = true,
    type = 'button',
    color = 'primary',
    variant = 'elevated',
    disabled = false,
    className,
    children,
    ...rest
  } = props

  const buttonId = id || `actify-button${useId()}`

  const classes = clsx(
    buttons['btn'],
    colors[color],
    variants[variant],
    disabled && buttons['disabled'],
    className
  )

  return (
    <div role="presentation" style={style} className={classes}>
      <Elevation disabled={disabled} />
      {variant == 'outlined' && <div className={buttons['outline']} />}
      <span className={buttons['background']} />
      <FocusRing id={buttonId} />
      {ripple && <Ripple id={buttonId} disabled={disabled} />}
      <button
        {...rest}
        id={buttonId}
        disabled={disabled}
        className={buttons['button']}
      >
        <span className={buttons['touch']} />
        <span className={buttons['label']}>{children}</span>
      </button>
    </div>
  )
}

Button.displayName = 'Actify.Button'

export { Button }
