import { AriaCheckboxGroupProps, useCheckboxGroup } from 'react-aria'
import { CheckboxGroupState, useCheckboxGroupState } from 'react-stately'

import { Label } from '../Label'
import React from 'react'
import { StyleProps } from '../../utils'
import styles from './checkbox-group.module.css'

export const CheckboxGroupContext =
  React.createContext<CheckboxGroupState | null>(null)

interface Props extends AriaCheckboxGroupProps, StyleProps {
  children?: React.ReactNode
}
const CheckboxGroup = (props: Props) => {
  const { children, label, description, style, className } = props
  const state = useCheckboxGroupState(props)
  const {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useCheckboxGroup(props, state)

  return (
    <div {...groupProps} style={style} className={className}>
      {label && <Label {...labelProps}>{label}</Label>}
      <CheckboxGroupContext value={state}>{children}</CheckboxGroupContext>
      {description && (
        <div {...descriptionProps} className={styles['description']}>
          {description}
        </div>
      )}
      {isInvalid && (
        <div {...errorMessageProps} className={styles['error-message']}>
          {validationErrors.join(' ')}
        </div>
      )}
    </div>
  )
}

export { CheckboxGroup }
