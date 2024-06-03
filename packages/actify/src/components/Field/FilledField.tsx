import { Field, FieldProps } from './Field'

import React from 'react'
import field from './styles/field.module.css'
import styles from './styles/actify.module.css'

interface FilledFieldProps extends FieldProps, React.ComponentProps<'div'> {}

const renderBackground = () => {
  return (
    <React.Fragment>
      <div className={styles['background']} />
      <div className={styles['state-layer']} />
    </React.Fragment>
  )
}
const renderIndicator = () => <div className={styles['active-indicator']} />

const FilledField = (props: FilledFieldProps) => {
  const { children, ...rest } = props

  return (
    <Field
      {...rest}
      className={field['filled']}
      renderBackground={renderBackground}
      renderIndicator={renderIndicator}
    >
      <div className={styles['input-wrapper']}>{children}</div>
    </Field>
  )
}

export { FilledField }
