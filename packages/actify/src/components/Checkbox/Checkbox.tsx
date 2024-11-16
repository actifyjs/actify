'use client'

import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxProps,
  mergeProps,
  useCheckbox,
  useFocusRing
} from 'react-aria'
import { CheckboxGroupState, useToggleState } from 'react-stately'
import React, { useId } from 'react'
import { useCheckboxGroup, useCheckboxGroupItem } from 'react-aria'

import { CheckboxGroupContext } from './CheckboxGroup'
import { FocusRing } from './../FocusRing'
import { Label } from './../Label'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './checkbox.module.css'

interface CheckboxProps extends AriaCheckboxProps {
  ref?: React.RefObject<HTMLInputElement>
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Checkbox = (props: CheckboxProps) => {
  const _id = `actify-checkbox${useId()}`
  const _inputRef = React.useRef(null)

  const { id = _id, ref: inputRef = _inputRef } = props

  const groupState = React.useContext(CheckboxGroupContext)
  const toggleState = useToggleState(props)

  const state = groupState ?? toggleState

  const { inputProps } = groupState
    ? useCheckboxGroupItem(
        props as AriaCheckboxGroupItemProps,
        state as CheckboxGroupState,
        inputRef
      )
    : useCheckbox(props, toggleState, inputRef)

  const isSelected = groupState
    ? (state as CheckboxGroupState).isSelected(props.value as string)
    : state.isSelected && !props.isIndeterminate
  const isDisabled = groupState
    ? (state as CheckboxGroupState).isDisabled
    : props.isDisabled

  const { isFocusVisible, focusProps } = useFocusRing()

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
            id={id}
            ref={inputRef}
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
            id={id}
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
