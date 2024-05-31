'use client'

import './checkbox.css'

import React, { useId } from 'react'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'

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
      classes.push('disabled')
    }
    if (internalChecked || indeterminate.current) {
      classes.push('selected')
    }
    if (!internalChecked && !indeterminate.current) {
      classes.push('unselected')
    }
    if (internalChecked) {
      classes.push('checked')
    }
    if (indeterminate.current) {
      classes.push('indeterminate')
    }

    // prev status
    if (classes.includes('selected')) {
      prevStatus.current = 'prev-unselected'
    }
    if (classes.includes('unselected')) {
      prevStatus.current = 'pre-checked'
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
    <div role="presentation" className="a-checkbox">
      <div className="a-checkbox-container">
        <input
          {...rest}
          type={type}
          id={checkboxId}
          disabled={disabled}
          onChange={handleChange}
          checked={internalChecked}
          className="a-checkbox-input"
          aria-checked={indeterminate.current ? 'mixed' : undefined}
        />
        <span
          className={clsx(
            'a-checkbox-outline',
            containerClasses,
            prevStatus.current
          )}
        />
        <span
          className={clsx(
            'a-checkbox-background',
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
          className={clsx(
            'a-checkbox-icon',
            containerClasses,
            prevStatus.current
          )}
        >
          <rect
            className={clsx(
              'a-checkbox-mark',
              'a-checkbox-mark-short',
              containerClasses,
              prevStatus.current
            )}
          />
          <rect
            className={clsx(
              'a-checkbox-mark',
              'a-checkbox-mark-long',
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
