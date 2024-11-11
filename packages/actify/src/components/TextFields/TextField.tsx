import type { AriaTextFieldProps, TextFieldAria } from 'react-aria'
import { FilledField, OutlinedField } from './../Field'
import { mergeProps, useFocusRing, useTextField } from 'react-aria'

import React from 'react'
import styles from './text-field.module.css'

interface TextFieldProps extends AriaTextFieldProps {
  ref?: React.RefObject<HTMLElement | null>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  inputRef?: React.RefObject<Element | null>
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
const TextField = (props: TextFieldProps) => {
  const {
    label,
    suffixText,
    prefixText,
    leadingIcon,
    trailingIcon,
    type = 'text',
    variant = 'filled',
    inputRef: propInputRef,
    inputProps: propInputProps
  } = props

  const inputRef =
    (propInputRef as
      | React.RefObject<HTMLInputElement>
      | React.RefObject<HTMLTextAreaElement>) || React.useRef(null)

  const {
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useTextField(
    { ...props, inputElementType: type == 'textarea' ? 'textarea' : 'input' },
    inputRef
  )

  const { focusProps, isFocused } = useFocusRing()

  let Tag = FilledField
  if (variant == 'filled') {
    Tag = FilledField
  }
  if (variant == 'outlined') {
    Tag = OutlinedField
  }

  return (
    <label className={styles[variant]}>
      <Tag
        {...{
          label,
          leadingIcon,
          trailingIcon,
          focused: isFocused,
          count: inputProps.value?.toString().length,
          populated: propInputProps
            ? !!propInputProps.value
            : inputProps.value
              ? true
              : false
        }}
      >
        {prefixText && <span className={styles['prefix']}>{prefixText}</span>}
        {type == 'textarea' ? (
          <textarea
            {...mergeProps(
              focusProps,
              inputProps as TextFieldAria,
              propInputProps
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
              inputProps as TextFieldAria,
              propInputProps
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
