import { Field, FieldProps } from './Field'

export interface OutlinedFieldProps
  extends FieldProps,
    React.ComponentProps<'div'> {}

const renderOutline = (floatingLabel: JSX.Element | '') => (
  <div className="a-outline">
    <div className="a-outline-start" />
    <div className="a-outline-notch">
      <div className="a-outline-panel-inactive" />
      <div className="a-outline-panel-active" />
      <div className="a-outline-label">{floatingLabel}</div>
    </div>
    <div className="a-outline-end" />
  </div>
)

const OutlinedField = (props: OutlinedFieldProps) => {
  const { children, ...rest } = props

  return (
    <Field className="a-field-outlined" {...rest} renderOutline={renderOutline}>
      <div className="a-input-wrapper">{children}</div>
    </Field>
  )
}

export { OutlinedField }
