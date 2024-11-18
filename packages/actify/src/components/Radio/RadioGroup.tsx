import { AriaRadioGroupProps, useRadioGroup } from 'react-aria'
import { RadioGroupState, useRadioGroupState } from 'react-stately'

import { Label } from '../Label'
import React from 'react'
import { StyleProps } from '../../utils'
import clsx from 'clsx'
import styles from './radio-group.module.css'

export const RadioContext = React.createContext<RadioGroupState | {}>({})

interface RadioGroupProps extends AriaRadioGroupProps, StyleProps {
  children?: React.ReactNode
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    style,
    className,
    description,
    errorMessage,
    orientation = 'vertical'
  } = props
  const state = useRadioGroupState(props)
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup({ ...props, orientation }, state)

  return (
    <div
      {...radioGroupProps}
      style={style}
      className={clsx(styles['radio-group'], className)}
    >
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      <RadioContext value={state}>{props.children}</RadioContext>
      {description && (
        <div {...descriptionProps} className={styles['description']}>
          {description}
        </div>
      )}
      {errorMessage && state.isInvalid && (
        <div {...errorMessageProps} className={styles['error-message']}>
          <>{errorMessage}</>
        </div>
      )}
    </div>
  )
}

export { RadioGroup }
