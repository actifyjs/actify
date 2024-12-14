'use client'

import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps
} from 'react-aria-components'
import { mergeProps, useFocusRing } from 'react-aria'

import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import React from 'react'
import { Ripple } from './../Ripple'
import buttons from './styles/button.module.css'
import clsx from 'clsx'
import colors from './styles/color.module.css'
import variants from './styles/variant.module.css'

interface ButtonProps extends AriaButtonProps {
  ref?: React.RefObject<HTMLButtonElement | null>
  ripple?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
}

const Button = (props: ButtonProps) => {
  const {
    ref,
    style,
    children,
    className,
    ripple = true,
    color = 'primary',
    variant = 'elevated',
    isDisabled = false
  } = props

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <AriaButton
      ref={ref}
      {...mergeProps(props, focusProps)}
      style={style}
      className={clsx(
        buttons['btn'],
        colors[color],
        variants[variant],
        isDisabled && buttons['disabled'],
        className
      )}
    >
      <div className={buttons['button']}>
        <span className={buttons['background']} />
        <span className={buttons['touch']} />
        <span className={buttons['label']}>
          <>{children}</>
        </span>
        {variant == 'outlined' && <div className={buttons['outline']} />}
        {/* Elevation */}
        <Elevation disabled={isDisabled} />
        {/* FocusRing */}
        {isFocusVisible && <FocusRing />}
        {/* Ripple */}
        {ripple && <Ripple id={props.id} disabled={isDisabled} />}
      </div>
    </AriaButton>
  )
}

Button.displayName = 'Actify.Button'

export { Button }
