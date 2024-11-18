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

import { CheckboxGroupContext } from './CheckboxGroup'
import { FocusRing } from './../FocusRing'
import { Label } from './../Label'
import { Ripple } from './../Ripple'
import { StyleProps } from '../../utils'
import clsx from 'clsx'
import styles from './checkbox.module.css'
import { useCheckboxGroupItem } from 'react-aria'

interface CheckboxProps extends AriaCheckboxProps, StyleProps {
  ref?: React.RefObject<HTMLInputElement>
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Checkbox = (props: CheckboxProps) => {
  const _inputRef = React.useRef(null)

  const { ref: inputRef = _inputRef } = props

  const groupState = React.useContext(CheckboxGroupContext)
  const toggleState = useToggleState(props)

  const state = groupState ?? toggleState

  const { inputProps, labelProps } = groupState
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
    <div className={styles['checkbox-wrapper']}>
      <Label
        style={props.style}
        className={clsx(styles['checkbox'], props.className)}
      >
        <div className={styles['container']}>
          <input
            ref={inputRef}
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

          <Ripple
            id={inputProps.id}
            disabled={isDisabled}
            style={{
              inset: 'unset',
              borderRadius: '50%',
              width: 'var(--md-checkbox-state-layer-size, 40px)',
              height: 'var(--md-checkbox-state-layer-size, 40px)'
            }}
          />
          {isFocusVisible && (
            <FocusRing
              style={{
                width: '44px',
                height: '44px',
                inset: 'unset',
                borderRadius: '50%'
              }}
            />
          )}
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
      </Label>
      <Label {...labelProps}>{props.children}</Label>
    </div>
  )
}

Checkbox.displayName = 'Actify.Checkbox'

export { Checkbox }
