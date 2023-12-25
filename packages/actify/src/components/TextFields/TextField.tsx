'use client'
import React, { forwardRef } from 'react'
import { FilledTextField } from './FilledTextField'
import { OutlinedTextField } from './OutlinedTextField'
import { LeadingIcon } from './LeadingIcon'
import { TrailingIcon } from './TrailingIcon'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'cursor-text group',
  variants: {
    color: {
      primary: 'text-on-surface-variant',
      secondary: 'text-on-surface-variant',
      tertiary: 'text-on-surface-variant',
      error: 'text-error'
    },
    disabled: {
      true: 'text-outline opacity-[.38] cursor-default'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

interface TextFieldRootProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prefixText?: string
  suffixText?: string
  supportingText?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
  variant?: 'filled' | 'outlined'
}
const TextField = forwardRef<HTMLInputElement, TextFieldRootProps>(
  (props, ref) => {
    const { variant = 'filled', ...rest } = props

    return (
      <div>
        {/* @ts-ignore */}
        {variant === 'filled' && <FilledTextField ref={ref} {...rest} />}
        {/* @ts-ignore */}
        {variant === 'outlined' && <OutlinedTextField ref={ref} {...rest} />}
        {props.supportingText && <p className={`text-xs mt-1 ms-3 ${variants({ color: props.color, disabled: props.disabled, className: props.className })}`}>{props.supportingText}</p>}
      </div>
    )
  }
)

TextField.displayName = 'Actify.TextField'

export default Object.assign(TextField, {
  LeadingIcon,
  TrailingIcon
})
