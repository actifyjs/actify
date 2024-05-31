'use client'

import './styles/button.css'
import './styles/elevated.css'
import './styles/filled.css'
import './styles/outlined.css'
import './styles/text.css'
import './styles/tonal.css'
import './styles/background.css'
import './styles/outline.css'
import './styles/label.css'
import './styles/touch.css'
import './styles/color.css'

import React, { useId } from 'react'

import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'

interface ButtonProps extends React.ComponentProps<'button'> {
  ripple?: boolean
  trailingIcon?: boolean
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
    'a-btn',
    `a-btn-${color}`,
    `a-btn-${variant}`,
    disabled && 'a-btn-disabled',
    className
  )

  return (
    <div role="presentation" style={style} className={classes}>
      <Elevation disabled={disabled} />
      {variant == 'outlined' && <div className="a-btn-outline" />}
      <span className="a-btn-background" />
      <FocusRing id={buttonId} />
      {ripple && <Ripple id={buttonId} disabled={disabled} />}
      <button
        {...rest}
        id={buttonId}
        disabled={disabled}
        className="a-btn-button"
      >
        <span className="a-btn-touch" />
        <span className={'a-btn-label ' + className}>{children}</span>
      </button>
    </div>
  )
}

Button.displayName = 'Actify.Button'

export { Button }
