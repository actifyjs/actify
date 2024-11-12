import type { AriaTextFieldProps, TextFieldAria } from 'react-aria'
import { FilledField, OutlinedField } from './../Field'
import { mergeProps, useFocusRing, useTextField } from 'react-aria'

import React from 'react'
import styles from './text-field.module.css'

interface TextFieldProps extends AriaTextFieldProps {
  ref?: React.RefObject<HTMLElement | null>
  inputRef?: React.RefObject<Element | null>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  variant?: 'filled' | 'outlined'
  suffixText?: string
  prefixText?: string
  children?: React.ReactNode
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'textarea'
}
const TextField = ({
  suffixText,
  prefixText,
  leadingIcon,
  trailingIcon,
  type = 'text',
  variant = 'filled',
  inputRef,
  inputProps,
  ...props
}: TextFieldProps) => {
  const _inputRef =
    (inputRef as
      | React.RefObject<HTMLInputElement>
      | React.RefObject<HTMLTextAreaElement>) || React.useRef(null)

  const {
    inputProps: _inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useTextField(
    { ...props, inputElementType: type == 'textarea' ? 'textarea' : 'input' },
    _inputRef
  )

  const { focusProps, isFocused } = useFocusRing()

  let Tag = FilledField
  if (variant == 'filled') {
    Tag = FilledField
  }
  if (variant == 'outlined') {
    Tag = OutlinedField
  }

  const count = mergeProps(_inputProps, inputProps).value?.toString().length
  const populated = mergeProps(_inputProps, inputProps).value ? true : false

  return (
    <label {...labelProps} className={styles[variant]}>
      <Tag
        {...{
          leadingIcon,
          trailingIcon,
          count,
          populated,
          label: props.label,
          focused: isFocused
        }}
      >
        {prefixText && <span className={styles['prefix']}>{prefixText}</span>}
        {type == 'textarea' ? (
          <textarea
            {...mergeProps(
              focusProps,
              _inputProps as TextFieldAria,
              inputProps
            )}
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          />
        ) : (
          <input
            style={{
              overflowX: 'hidden',
              textAlign: 'inherit',
              caretColor: 'var(--_caret-color)'
            }}
            {...mergeProps(
              focusProps,
              _inputProps as TextFieldAria,
              inputProps
            )}
            ref={inputRef as React.RefObject<HTMLInputElement>}
          />
        )}
        {suffixText && <span className={styles['suffix']}>{suffixText}</span>}
      </Tag>
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {isInvalid && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {validationErrors.join(' ')}
        </div>
      )}
    </label>
  )
}

TextField.displayName = 'Actify.TextField'

export { TextField }
