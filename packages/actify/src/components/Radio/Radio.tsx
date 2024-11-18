import { AriaRadioProps, mergeProps, useFocusRing, useRadio } from 'react-aria'

import { FocusRing } from '../FocusRing/FocusRing'
import { Label } from '../Label'
import { RadioGroupContext } from './RadioGroup'
import { RadioGroupState } from 'react-stately'
import React from 'react'
import { Ripple } from '../Ripple/Ripple'
import { StyleProps } from '../../utils'
import clsx from 'clsx'
import styles from './radio.module.css'

interface RadioProps extends AriaRadioProps, StyleProps {
  ref?: React.RefObject<HTMLInputElement>
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Radio = (props: RadioProps) => {
  const _inputRef = React.useRef(null)
  const { ref: inputRef = _inputRef } = props

  const state = React.useContext(RadioGroupContext) as RadioGroupState
  const { inputProps, labelProps, isSelected } = useRadio(
    props,
    state,
    inputRef
  )

  const { isFocusVisible, focusProps } = useFocusRing()
  const cutoutId = `radio-cutout${React.useId()}`

  return (
    <div className={styles['radio-wrapper']}>
      <Label
        style={props.style}
        className={clsx(styles['radio'], props.className)}
      >
        <div
          className={clsx(styles['container'], isSelected && styles['checked'])}
        >
          <input
            ref={inputRef}
            className={styles['input']}
            {...mergeProps(inputProps, focusProps)}
          />

          <Ripple
            id={inputProps.id}
            style={{
              inset: 'unset',
              borderRadius: '50%',
              width: 'var(--md-radio-state-layer-size, 40px)',
              height: 'var(--md-radio-state-layer-size, 40px)'
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
          <svg className={styles['icon']} viewBox="0 0 20 20">
            <mask id={cutoutId}>
              <rect width="100%" height="100%" fill="white" />
              <circle cx="10" cy="10" r="8" fill="black" />
            </mask>
            <circle
              r="10"
              cx="10"
              cy="10"
              mask={`url(#${cutoutId})`}
              className={clsx(styles['outer'], styles['circle'])}
            />
            <circle
              r="5"
              cx="10"
              cy="10"
              className={clsx(styles['inner'], styles['circle'])}
            />
          </svg>
        </div>
      </Label>
      <Label {...labelProps}>{props.children}</Label>
    </div>
  )
}

Radio.displayName = 'Actify.Radio'
export { Radio }
