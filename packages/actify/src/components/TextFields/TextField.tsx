'use client'
import React, { forwardRef } from 'react'
import { FilledTextField } from './FilledTextField'
import { OutlinedTextField } from './OutlinedTextField'
import { LeadingIcon } from './LeadingIcon'
import { TrailingIcon } from './TrailingIcon'

interface TextFieldRootProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prefixText?: string
  suffixText?: string
  variant?: 'filled' | 'outlined'
}
const TextField = forwardRef<HTMLInputElement, TextFieldRootProps>(
  (props, ref) => {
    const { variant = 'filled', ...rest } = props

    return (
      <>
        {/* @ts-ignore */}
        {variant === 'filled' && <FilledTextField ref={ref} {...rest} />}
        {/* @ts-ignore */}
        {variant === 'outlined' && <OutlinedTextField ref={ref} {...rest} />}
      </>
    )
  }
)

TextField.displayName = 'Actify.TextField'

export default Object.assign(TextField, {
  LeadingIcon,
  TrailingIcon
})
