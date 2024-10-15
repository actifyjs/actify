import { AriaRadioProps, mergeProps, useFocusRing, useRadio } from 'react-aria'

import { FocusRing } from '../FocusRing/FocusRing'
import { Label } from '../Label'
import { RadioContext } from './RadioGroup'
import { RadioGroupState } from 'react-stately'
import React from 'react'
import { Ripple } from '../Ripple/Ripple'
import clsx from 'clsx'
import styles from './radio.module.css'

type RadioProps = {} & AriaRadioProps & React.ComponentProps<'input'>
const Radio = (props: RadioProps) => {
  const { children } = props
  const state = React.useContext(RadioContext) as RadioGroupState
  const inputRef = React.useRef(null)
  const { inputProps, isSelected } = useRadio(props, state, inputRef)

  const { isFocusVisible, focusProps } = useFocusRing()
  const cutoutId = `radio-cutout${React.useId()}`

  return (
    <Label className={styles['radio']}>
      <div
        role="presentation"
        className={clsx(styles['container'], isSelected && styles['checked'])}
      >
        <input
          ref={inputRef}
          {...mergeProps(inputProps, focusProps)}
          className={clsx(styles['input'], props.className)}
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
              height: '44px',
              inset: 'unset',
              width: '44px',
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
      {children}
    </Label>
  )
}

Radio.displayName = 'Actify.Radio'
export { Radio }
