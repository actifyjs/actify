import type { AriaTextFieldProps, TextFieldAria } from 'react-aria'
import { FilledField, OutlinedField } from './../Field'
import { mergeProps, useFocusRing, useTextField } from 'react-aria'

import React from 'react'
import styles from './text-field.module.css'

interface TextFieldProps extends AriaTextFieldProps {
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
  const ref = React.useRef(null)
  const {
    label,
    suffixText,
    prefixText,
    leadingIcon,
    trailingIcon,
    type = 'text',
    variant = 'filled'
  } = props

  const {
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useTextField(
    { ...props, inputElementType: type == 'textarea' ? 'textarea' : 'input' },
    ref
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
    <div>
      <div className={styles[variant]}>
        <Tag
          {...{
            label,
            leadingIcon,
            trailingIcon,
            focused: isFocused,
            count: inputProps.value?.toString().length,
            populated: inputProps.value ? true : false
          }}
        >
          {prefixText && <span className={styles['prefix']}>{prefixText}</span>}
          {type == 'textarea' ? (
            <textarea
              {...mergeProps(focusProps, inputProps as TextFieldAria)}
              ref={ref}
            />
          ) : (
            <input
              {...mergeProps(focusProps, inputProps as TextFieldAria)}
              style={{
                overflowX: 'hidden',
                textAlign: 'inherit',
                caretColor: 'var(--_caret-color)'
              }}
              ref={ref}
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
      </div>
    </div>
  )
}

TextField.displayName = 'Actify.TextField'

export { TextField }
