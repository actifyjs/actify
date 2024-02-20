'use client'
import React, { forwardRef } from 'react'
import FilledButton from './FilledButton'
import ElevatedButton from './ElevatedButton'
import TonalButton from './TonalButton'
import OutlinedButton from './OutlinedButton'
import TextButton from './TextButton'

interface ButtonProps extends React.ComponentProps<'button'> {
  href?: string
  ripple?: boolean
  disabled?: boolean
  target?: React.HTMLAttributeAnchorTarget
  type?: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'filled' | 'elevated' | 'outlined' | 'tonal' | 'text'
}

const Button = forwardRef(
  (props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) => {
    const { variant = 'filled', ...rest } = props

    return (
      <>
        {/* @ts-expect-error */}
        {variant === 'filled' && <FilledButton ref={ref} {...rest} />}
        {/* @ts-expect-error */}
        {variant === 'elevated' && <ElevatedButton ref={ref} {...rest} />}
        {/* @ts-expect-error */}
        {variant === 'tonal' && <TonalButton ref={ref} {...rest} />}
        {/* @ts-expect-error */}
        {variant === 'outlined' && <OutlinedButton ref={ref} {...rest} />}
        {/* @ts-expect-error */}
        {variant === 'text' && <TextButton ref={ref} {...rest} />}
      </>
    )
  }
)

Button.displayName = 'Actify.Button'

export default Button
