import { Field, FieldProps } from './Field'

import React from 'react'
import styles from './styles/field.module.css'

export interface OutlinedFieldProps
  extends FieldProps,
    React.ComponentProps<'div'> {}

const renderOutline = (floatingLabel: React.JSX.Element | '') => (
  <div className={styles['outline']}>
    <div className={styles['outline-start']} />
    <div className={styles['outline-notch']}>
      <div className={styles['outline-panel-inactive']} />
      <div className={styles['outline-panel-active']} />
      <div className={styles['outline-label']}>{floatingLabel}</div>
    </div>
    <div className={styles['outline-end']} />
  </div>
)

const OutlinedField = (props: OutlinedFieldProps) => {
  const { children, ...rest } = props

  return (
    <Field
      {...rest}
      className={styles['outlined']}
      renderOutline={renderOutline}
    >
      <div className={styles['input-wrapper']}>{children}</div>
    </Field>
  )
}

export { OutlinedField }
