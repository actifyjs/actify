'use client'

import { FilledField } from '../Field/FilledField'
import { LeadingIcon } from './LeadingIcon'
import { OutlinedField } from '../Field/OutlinedField'
import React from 'react'
import { TrailingIcon } from './TrailingIcon'
import clsx from 'clsx'
import styles from './text-field.module.css'
import { useInputState } from '../../hooks'

/**
 * Input types that are compatible with the text field.
 */
export type TextFieldType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'textarea'

export interface TextFieldProps extends React.ComponentProps<'input'> {
  label?: string
  count?: number
  error?: boolean
  errorText?: string
  maxLength?: number
  resizable?: boolean
  prefixText?: string
  suffixText?: string
  type?: TextFieldType
  supportingText?: string
  variant?: 'filled' | 'outlined'
}

const TextField = (props: TextFieldProps) => {
  const {
    id,
    value,
    onChange,
    defaultValue,
    type = 'text',

    disabled = false,
    error = false,
    errorText = '',
    label = '',
    maxLength = -1,
    required = false,
    resizable,
    supportingText = '',

    prefixText = '',
    suffixText = '',
    variant = 'filled',
    className,
    children,
    ...rest
  } = props

  const [inputValue, setInputValue] = useInputState({
    value,
    defaultValue,
    onChange
  })

  const inputId = id || `actify-input${React.useId()}`
  const [focused, setFocused] = React.useState(false)

  const populated = React.useMemo(() => {
    if (inputValue) {
      return inputValue.toString().length > 0
    }
    return false
  }, [inputValue])

  const count = React.useMemo(() => {
    return inputValue.toString().length ?? -1
  }, [inputValue])

  let leadingIcon = null
  let trailingIcon = null

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type == LeadingIcon) {
        leadingIcon = child
      }
      if (child.type == TrailingIcon) {
        trailingIcon = child
      }
    }
  })

  let Tag = FilledField
  if (variant == 'filled') {
    Tag = FilledField
  }
  if (variant == 'outlined') {
    Tag = OutlinedField
  }

  return (
    <div className={clsx(styles[variant], className)}>
      <span
        style={{
          width: '100%',
          resize: 'inherit',
          display: 'inline-flex'
        }}
      >
        <Tag
          count={count}
          disabled={disabled}
          error={error}
          errorText={errorText}
          focused={focused}
          label={label}
          max={maxLength}
          populated={populated}
          required={required}
          resizable={resizable}
          supportingText={supportingText}
          leadingIcon={leadingIcon}
          trailingIcon={trailingIcon}
        >
          {prefixText && (
            <span
              style={{
                textWrap: 'nowrap',
                width: 'min-content',
                paddingInlineEnd: 'var(--_input-text-prefix-trailing-space)'
              }}
            >
              {prefixText}
            </span>
          )}
          <input
            count={count}
            {...rest}
            type={type}
            id={inputId}
            value={inputValue}
            style={{
              overflowX: 'hidden',
              textAlign: 'inherit',
              caretColor: 'var(--_caret-color)'
            }}
            onChange={setInputValue}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
          />
          {suffixText && (
            <span
              style={{
                textWrap: 'nowrap',
                width: 'min-content',
                paddingInlineStart: 'var(--_input-text-suffix-leading-space)'
              }}
            >
              {suffixText}
            </span>
          )}
        </Tag>
      </span>
    </div>
  )
}

TextField.displayName = 'Actify.TextField'

export default Object.assign(TextField, {
  LeadingIcon,
  TrailingIcon
})
