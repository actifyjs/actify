import { AriaRadioGroupProps, useRadioGroup } from 'react-aria'
import { RadioGroupState, useRadioGroupState } from 'react-stately'

import { Label } from '../Label'
import React from 'react'

export const RadioContext = React.createContext<RadioGroupState | {}>({})

interface RadioGroupProps extends AriaRadioGroupProps {
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

const RadioGroup = (props: RadioGroupProps) => {
  const { style, className, children, label, description, errorMessage } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state)

  return (
    <div {...radioGroupProps} style={style} className={className}>
      {label && <Label {...labelProps}>{label}</Label>}
      <RadioContext value={state}>{children}</RadioContext>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {errorMessage && state.isInvalid && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          <>{errorMessage}</>
        </div>
      )}
    </div>
  )
}

export { RadioGroup }
