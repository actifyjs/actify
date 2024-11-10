import {
  CheckboxGroupProps,
  CheckboxGroupState,
  useCheckboxGroupState
} from 'react-stately'

import { Label } from '../Label'
import React from 'react'
import { useCheckboxGroup } from 'react-aria'

const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
  null
)

interface Props extends CheckboxGroupProps {
  children?: React.ReactNode
}
const CheckboxGroup = (props: Props) => {
  const { children, label, description } = props
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
    <div {...groupProps}>
      <Label {...labelProps}>{label}</Label>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {isInvalid && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {validationErrors.join(' ')}
        </div>
      )}
    </div>
  )
}

export { CheckboxGroup }
