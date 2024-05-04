'use client'
import React, { forwardRef } from 'react'
import FilledButton from './FilledButton'
import ElevatedButton from './ElevatedButton'
import TonalButton from './TonalButton'
import OutlinedButton from './OutlinedButton'
import TextButton from './TextButton'

export interface ButtonProps extends React.ComponentProps<'button'> {
  href?: string
  ripple?: boolean
  disabled?: boolean
  trailingIcon?: boolean
  type?: 'submit' | 'reset' | 'button'
  target?: React.HTMLAttributeAnchorTarget
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'filled' | 'elevated' | 'outlined' | 'tonal' | 'text'
}

const Button = forwardRef(
  (props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) => {
    const { variant = 'filled', ...rest } = props

    return (
      <>
        {variant === 'filled' && <FilledButton ref={ref} {...rest} />}
        {variant === 'elevated' && <ElevatedButton ref={ref} {...rest} />}
        {variant === 'tonal' && <TonalButton ref={ref} {...rest} />}
        {variant === 'outlined' && <OutlinedButton ref={ref} {...rest} />}
        {variant === 'text' && <TextButton ref={ref} {...rest} />}
      </>
    )
  }
)

Button.displayName = 'Actify.Button'

export default Button
