'use client'

import React, { useId } from 'react'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './checkbox.module.css'

interface CheckboxProps extends React.ComponentProps<'input'> {
  indeterminate?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Checkbox = ({
  id,
  disabled,
  className,
  color = 'primary',
  type = 'checkbox',
  onChange,
  checked,
  defaultChecked,
  indeterminate: indeterminateProp,
  ...rest
}: CheckboxProps) => {
  const prevStatus = React.useRef('')
  const indeterminate = React.useRef(indeterminateProp)
  const checkboxId = id || `actify-checkbox${useId()}`

  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked ?? false
  )

  const containerClasses = React.useMemo(() => {
    let classes = []
    if (disabled) {
      classes.push(styles['disabled'])
    }
    if (internalChecked || indeterminate.current) {
      classes.push(styles['selected'])
    }
    if (!internalChecked && !indeterminate.current) {
      classes.push(styles['unselected'])
    }
    if (internalChecked) {
      classes.push(styles['checked'])
    }
    if (indeterminate.current) {
      classes.push(styles['indeterminate'])
    }

    // prev status
    if (classes.includes(styles['selected'])) {
      prevStatus.current = styles['prev-unselected']
    }
    if (classes.includes(styles['unselected'])) {
      prevStatus.current = styles['pre-checked']
    }

    return classes.join(' ')
  }, [disabled, internalChecked, indeterminate.current])

  const isControlled = checked !== undefined

  React.useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked)
    }
  }, [checked, isControlled])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked
    if (!isControlled) {
      setInternalChecked(newChecked)
    }
    indeterminate.current = false
    onChange?.(event)
  }

  return (
    <div role="presentation" className={styles['checkbox']}>
      <div className={styles['container']}>
        <input
          {...rest}
          type={type}
          id={checkboxId}
          disabled={disabled}
          onChange={handleChange}
          checked={internalChecked}
          className={styles['input']}
          aria-checked={indeterminate.current ? 'mixed' : undefined}
        />
        <span
          className={clsx(
            styles['outline'],
            containerClasses,
            prevStatus.current
          )}
        />
        <span
          className={clsx(
            styles['background'],
            containerClasses,
            prevStatus.current
          )}
        />
        <FocusRing
          id={checkboxId}
          style={{
            width: '44px',
            height: '44px',
            inset: 'unset'
          }}
        />
        <Ripple
          id={checkboxId}
          disabled={disabled}
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
          className={clsx(styles['icon'], containerClasses, prevStatus.current)}
        >
          <rect
            className={clsx(
              styles['mark'],
              styles['short'],
              containerClasses,
              prevStatus.current
            )}
          />
          <rect
            className={clsx(
              styles['mark'],
              styles['long'],
              containerClasses,
              prevStatus.current
            )}
          />
        </svg>
      </div>
    </div>
  )
}

Checkbox.displayName = 'Actify.Checkbox'

export { Checkbox }
