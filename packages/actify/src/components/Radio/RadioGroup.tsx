import { AriaRadioGroupProps, useRadioGroup } from 'react-aria'
import { RadioGroupState, useRadioGroupState } from 'react-stately'

import React from 'react'

export const RadioContext = React.createContext<RadioGroupState | {}>({})

type RadioGroupProps = {} & AriaRadioGroupProps & React.ComponentProps<'div'>

const RadioGroup = (props: RadioGroupProps) => {
  const { style, className, children, label, description, errorMessage } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state)

  return (
    <div {...radioGroupProps} style={style} className={className}>
      <span {...labelProps}>{label}</span>
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
