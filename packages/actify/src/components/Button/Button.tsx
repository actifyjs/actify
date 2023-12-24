'use client'
import React, { forwardRef } from 'react'
import FilledButton from './FilledButton'
import ElevatedButton from './ElevatedButton'
import TonalButton from './TonalButton'
import OutlinedButton from './OutlinedButton'
import TextButton from './TextButton'

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement
interface ButtonProps<T extends ButtonTypes>
  extends React.AnchorHTMLAttributes<T>,
    React.ButtonHTMLAttributes<T> {
  ripple?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'filled' | 'elevated' | 'outlined' | 'tonal' | 'text'
}

const Button = forwardRef(
  <T extends ButtonTypes>(
    props: ButtonProps<T>,
    ref?: React.Ref<ButtonTypes>
  ) => {
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
