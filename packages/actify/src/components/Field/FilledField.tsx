import { Field, FieldProps } from './Field'

import React from 'react'

interface FilledFieldProps extends FieldProps, React.ComponentProps<'div'> {}

const renderBackground = () => {
  return (
    <React.Fragment>
      <div className="a-field-background" />
      <div className="a-state-layer" />
    </React.Fragment>
  )
}
const renderIndicator = () => <div className="a-active-indicator" />

const FilledField = (props: FilledFieldProps) => {
  const { children, ...rest } = props

  return (
    <Field
      className="a-field-filled"
      {...rest}
      renderBackground={renderBackground}
      renderIndicator={renderIndicator}
    >
      <div className="a-input-wrapper">{children}</div>
    </Field>
  )
}

export { FilledField }
