'use client'
import { tv } from 'tailwind-variants'
import { Ripple } from './../Ripple'
import { FocusRing } from './../FocusRing'
import { EASING } from './../../animations'
import React, { useState, forwardRef, useId } from 'react'

const root = tv({
  base: [
    '[margin:max(0px,(48px_-_var(--md-checkbox-container-size,18px))/2)]',
    'relative',
    'inline-flex',
    'cursor-pointer',
    '[vertical-align:top]',
    '[-webkit-tap-highlight-color:rgba(0,0,0,0)]',
    'size-[var(--md-checkbox-container-size,18px)]',
    '[border-start-start-radius:var(--md-checkbox-container-shape-start-start,var(--md-checkbox-container-shape,2px))]',
    '[border-start-end-radius:var(--md-checkbox-container-shape-start-end,var(--md-checkbox-container-shape,2px))]',
    '[border-end-end-radius:var(--md-checkbox-container-shape-end-end,var(--md-checkbox-container-shape,2px))]',
    '[border-end-start-radius:var(--md-checkbox-container-shape-end-start,var(--md-checkbox-container-shape,2px))]'
  ]
})

const container = tv({
  base: [
    'flex',
    'relative',
    'size-full',
    'rounded-[inherit]',
    'place-items-center',
    'place-content-center'
  ]
})

const input = tv({
  base: [
    'm-0',
    'z-[1]',
    'size-12',
    'absolute',
    'opacity-0',
    'outline-none',
    'appearance-none',
    'cursor-[inherit]'
  ]
})

const outline = tv({
  base: [
    'absolute',
    'inset-0',
    'rounded-[inherit]',
    'box-border',
    'border-solid',
    '[border-width:var(--md-checkbox-outline-width,2px)]',
    '[border-color:var(--md-checkbox-outline-color,rgb(var(--color-on-surface-variant)))]'
  ],
  variants: {
    disabled: {
      true: [
        'opacity-[var(--md-checkbox-disabled-container-opacity,0.38)]',
        '[border-width:var(--md-checkbox-disabled-outline-width,2px)]',
        '[border-color:var(--md-checkbox-disabled-outline-color,var(--color-on-surface,#1d1b20))]'
      ]
    }
  }
})

const background = tv({
  base: [
    'absolute',
    'inset-0',
    'rounded-[inherit]',
    'transition-[transform,opacity]'
  ],
  variants: {
    color: {
      primary:
        '[background-color:var(--md-checkbox-selected-container-color,rgb(var(--color-primary)))]',
      secondary:
        '[background-color:var(--md-checkbox-selected-container-color,rgb(var(--color-secondary)))]',
      tertiary:
        '[background-color:var(--md-checkbox-selected-container-color,rgb(var(--color-tertiary)))]',
      error:
        '[background-color:var(--md-checkbox-selected-container-color,rgb(var(--color-error)))]'
    },
    disabled: {
      true: ''
    },
    indeterminate: {
      true: ''
    },
    selected: {
      true: [
        'scale-100',
        'opacity-100',
        'duration-[350ms,50ms]',
        `[transition-timing-function:${EASING.EMPHASIZED_DECELERATE},linear]`
      ],
      false: [
        'scale-[0.6]',
        'opacity-0',
        'duration-[150ms,50ms]',
        `[transition-timing-function:${EASING.EMPHASIZED_ACCELERATE},linear]`
      ]
    }
  },
  compoundVariants: [
    {
      disabled: true,
      selected: true,
      className: [
        'opacity-[var(--md-checkbox-selected-disabled-container-opacity,0.38)]',
        '[background: var(--md-checkbox-selected-disabled-container-color,rgb(var(--color-on-surface)))]'
      ]
    },
    {
      selected: false,
      indeterminate: true,
      className: 'opacity-100 scale-100'
    }
  ],
  defaultVariants: {
    color: 'primary'
  }
})

const icon = tv({
  base: [
    'absolute',
    'inset-0',
    'rounded-[inherit]',
    'transition-[transform,opacity]',
    'size-[var(--md-checkbox-icon-size,18px)]'
  ],
  variants: {
    color: {
      primary:
        'fill-[var(--md-checkbox-selected-icon-color,rgb(var(--color-on-primary)))]',
      secondary:
        'fill-[var(--md-checkbox-selected-icon-color,rgb(var(--color-on-secondary)))]',
      tertiary:
        'fill-[var(--md-checkbox-selected-icon-color,rgb(var(--color-on-tertiary)))]',
      error:
        'fill-[var(--md-checkbox-selected-icon-color,rgb(var(--color-on-error)))]'
    },
    selected: {
      true: [
        'opacity-100',
        'scale-100',
        'duration-[350ms,50ms]',
        `[transition-timing-function:${EASING.EMPHASIZED_DECELERATE},linear]`
      ],
      false: [
        'opacity-0',
        'scale-[0.6]',
        'duration-[150ms,50ms]',
        `[transition-timing-function:${EASING.EMPHASIZED_ACCELERATE},linear]`
      ]
    },
    indeterminate: {
      true: ''
    }
  },
  compoundVariants: [
    {
      selected: false,
      indeterminate: true,
      className: 'opacity-100 scale-100'
    }
  ],
  defaultVariants: {
    color: 'primary'
  }
})

const mark = tv({
  base: [
    'duration-150',
    '[animation-duration:150ms]',
    `[animation-timing-function:${EASING.EMPHASIZED_ACCELERATE}]`,
    `[transition-timing-function:${EASING.EMPHASIZED_ACCELERATE}]`,
    '[transform:scaleY(-1)_translate(7px,-14px)_rotate(45deg)]'
  ],
  variants: {
    selected: {
      true: ''
    },
    indeterminate: {
      false: ''
    },
    short: {
      true: 'w-0.5 h-0.5 transition-[transform,height]'
    },
    long: {
      true: 'w-2.5 h-0.5 transition-[transform,width]'
    }
  },
  compoundVariants: [
    {
      selected: false,
      indeterminate: true,
      className: '[transform:scaleY(-1)_translate(4px,-10px)_rotate(0deg)]'
    },
    {
      selected: true,
      short: true,
      className: 'h-[5.65685px]'
    },
    {
      selected: true,
      long: true,
      className: 'w-[11.3137px]'
    }
  ]
})

interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  indeterminate?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    style,
    color,
    checked,
    onChange,
    disabled,
    className,
    defaultChecked,
    indeterminate = false,
    type = 'checkbox',
    ...rest
  } = props

  const id = useId()

  const isControlled = typeof checked != 'undefined'
  const hasDefaultChecked = typeof defaultChecked != 'undefined'
  const [internalChecked, setInternalChecked] = useState(
    hasDefaultChecked ? defaultChecked : false
  )
  const inputChecked = isControlled ? checked : internalChecked

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    if (!isControlled) {
      setInternalChecked(event.target.checked)
    }
  }
  return (
    <div style={style} className={root({ className })}>
      <div className={container()}>
        <input
          id={id}
          ref={ref}
          {...rest}
          type={type}
          disabled={disabled}
          className={input()}
          checked={inputChecked}
          onChange={handleChange}
        />
        <div className={outline({ disabled })}></div>
        <div
          className={background({
            color,
            disabled,
            indeterminate,
            selected: inputChecked
          })}
        ></div>
        <FocusRing id={id} className="size-11 inset-[unset] rounded-full" />
        <Ripple
          id={id}
          disabled={disabled}
          className="rounded-full inset-[unset] size-10"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 18 18"
          className={icon({ color, indeterminate, selected: inputChecked })}
        >
          <rect
            className={mark({
              indeterminate,
              short: true,
              selected: inputChecked
            })}
          ></rect>
          <rect
            className={mark({
              indeterminate,
              long: true,
              selected: inputChecked
            })}
          ></rect>
        </svg>
      </div>
    </div>
  )
})

Checkbox.displayName = 'Actify.Checkbox'

export default Checkbox
