'use client'

import {
  AriaCheckboxProps,
  mergeProps,
  useCheckbox,
  useFocusRing
} from 'react-aria'
import React, { useId } from 'react'

import { FocusRing } from './../FocusRing'
import { Label } from './../Label'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './checkbox.module.css'
import { useToggleState } from 'react-stately'

type CheckboxProps = {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
} & AriaCheckboxProps

const Checkbox = (props: CheckboxProps) => {
  const { id, isDisabled } = props

  const state = useToggleState(props)
  const inputRef = React.useRef(null)

  const { inputProps } = useCheckbox(props, state, inputRef)
  const { isFocusVisible, focusProps } = useFocusRing()

  const isSelected = state.isSelected && !props.isIndeterminate

  const checkboxId = id || `actify-checkbox${useId()}`

  return (
    <Label
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div role="presentation" className={styles['checkbox']}>
        <div className={styles['container']}>
          <input
            ref={inputRef}
            id={checkboxId}
            role="checkbox"
            className={styles['input']}
            {...mergeProps(inputProps, focusProps)}
            aria-checked={props.isIndeterminate ? 'mixed' : undefined}
          />

          <span
            className={clsx([
              styles['outline'],
              isDisabled && styles['disabled']
            ])}
          />
          <span
            className={clsx([
              styles['background'],
              props.isIndeterminate || isSelected
                ? styles['selected']
                : styles['unselected']
            ])}
          />
          {isFocusVisible && (
            <FocusRing
              style={{
                width: '44px',
                height: '44px',
                inset: 'unset'
              }}
            />
          )}
          <Ripple
            id={checkboxId}
            disabled={isDisabled}
            style={{
              width: '40px',
              height: '40px',
              inset: 'unset',
              borderRadius: '50%'
            }}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 18 18"
            className={clsx([
              styles['icon'],
              props.isIndeterminate || isSelected
                ? styles['selected']
                : styles['unselected']
            ])}
          >
            <rect
              className={clsx([
                styles['mark'],
                styles['short'],
                props.isIndeterminate && styles['indeterminate'],
                isSelected ? styles['checked'] : styles['unselected']
              ])}
            />
            <rect
              className={clsx([
                styles['mark'],
                styles['long'],
                props.isIndeterminate && styles['indeterminate'],
                isSelected ? styles['checked'] : styles['unselected']
              ])}
            />
          </svg>
        </div>
      </div>
      {props.children}
    </Label>
  )
}

Checkbox.displayName = 'Actify.Checkbox'

export { Checkbox }
