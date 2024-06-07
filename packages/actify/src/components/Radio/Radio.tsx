import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from '../Ripple'
import clsx from 'clsx'
import styles from './actify.module.css'
import { useRadioContext } from './RadioGroupContext'

interface RadioProps
  extends Omit<
    React.ComponentProps<'input'>,
    'checked' | 'defaultValue' | 'name' | 'onChange'
  > {}

const Radio = ({
  id,
  value,
  disabled,
  className,
  type = 'radio',
  ...rest
}: RadioProps) => {
  const { name, value: contextValue, onChange } = useRadioContext()
  const radioId = id || `actify-radio${React.useId()}`
  const cutoutId = `radio-cutout${React.useId()}`

  const checked = React.useMemo(
    () => value == contextValue,
    [value, contextValue]
  )

  return (
    <div className={styles['radio']}>
      <div
        aria-hidden="true"
        className={clsx(styles['container'], checked && styles['checked'])}
      >
        <Ripple
          id={radioId}
          style={{
            inset: 'unset',
            borderRadius: '50%',
            width: 'var(--md-radio-state-layer-size, 40px)',
            height: 'var(--md-radio-state-layer-size, 40px)'
          }}
        />
        <FocusRing
          id={radioId}
          style={{
            height: '44px',
            inset: 'unset',
            width: '44px',
            borderRadius: '50%'
          }}
        />
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
        <input
          {...rest}
          name={name}
          type="radio"
          id={radioId}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={clsx(styles['input'], className)}
        />
      </div>
    </div>
  )
}

export { Radio }
