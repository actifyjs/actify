'use client'
import React, { useState, useId, forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { FocusRing } from '@actify/FocusRing'

const root = tv({
  base: [
    '[margin:max(0px,(48px_-_var(--md-radio-icon-size,20px))/2)]',
    'relative',
    'inline-flex',
    'outline-none',
    'cursor-pointer',
    '[vertical-align:top]',
    'size-[var(--md-radio-icon-size,20px)]',
    '[-webkit-tap-highlight-color:rgba(0,0,0,0)]',
    '[--md-ripple-hover-color:var(--md-radio-hover-state-layer-color,rgb(var(--color-on-surface)))]',
    '[--md-ripple-hover-opacity:var(--md-radio-hover-state-layer-opacity,0.08)]',
    '[--md-ripple-pressed-color:var(--md-radio-pressed-state-layer-color,rgb(var(--color-primary)))]',
    '[--md-ripple-pressed-opacity:var(--md-radio-pressed-state-layer-opacity,0.12)]'
  ]
})

const container = tv({
  base: ['flex', 'size-full', 'place-items-center', 'place-content-center'],
  variants: {
    color: {
      primary: '',
      secondary: '',
      tertiary: '',
      error: ''
    },
    checked: {
      true: [
        '[--md-ripple-hover-opacity:var(--md-radio-selected-hover-state-layer-opacity,0.08)]',
        '[--md-ripple-pressed-color:var(--md-radio-selected-pressed-state-layer-color,rgb(var(--color-on-surface)))]',
        '[--md-ripple-pressed-opacity:var(--md-radio-selected-pressed-state-layer-opacity,0.12)]'
      ]
    }
  },
  compoundVariants: [
    {
      checked: true,
      color: 'primary',
      className:
        '[-md-ripple-hover-color:var(--md-radio-selected-hover-state-layer-color,rgb(var(--color-primary)))]'
    },
    {
      checked: true,
      color: 'secondary',
      className:
        '[-md-ripple-hover-color:var(--md-radio-selected-hover-state-layer-color,rgb(var(--color-secondary)))]'
    },
    {
      checked: true,
      color: 'tertiary',
      className:
        '[-md-ripple-hover-color:var(--md-radio-selected-hover-state-layer-color,rgb(var(--color-tertiary)))]'
    },
    {
      checked: true,
      color: 'error',
      className:
        '[-md-ripple-hover-color:var(--md-radio-selected-hover-state-layer-color,rgb(var(--color-error)))]'
    }
  ],
  defaultVariants: {
    color: 'primary'
  }
})

const input = tv({
  base: ['m-0', 'size-12', 'absolute', 'appearance-none', 'cursor-[inherit]']
})

interface RadioProps extends React.ComponentPropsWithRef<'input'> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    name,
    style,
    color,
    value,
    checked,
    onChange,
    className,
    defaultChecked,
    disabled = false,
    type = 'radio',
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
      <style>
        {`
          @keyframes inner-circle-grow {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }       
        `}
      </style>
      <div
        aria-hidden="true"
        className={container({ color, checked: inputChecked })}
      >
        <Ripple
          id={id}
          disabled={disabled}
          className="rounded-full inset-[unset] size-10"
        />
        <FocusRing id={id} className="size-11 inset-[unset]" />
        <RadioIcon checked={inputChecked} disabled={disabled} />
        <input
          id={id}
          ref={ref}
          {...rest}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          className={input()}
          checked={inputChecked}
          onChange={handleChange}
        />
      </div>
    </div>
  )
})

const icon = tv({
  base: [
    'absolute',
    'inset-0',
    'fill-[var(--md-radio-icon-color,rgb(var(--color-on-surface-variant)))]'
  ],
  variants: {
    disabled: {
      true: [
        'opacity-[var(--md-radio-disabled-unselected-icon-opacity,0.38)]',
        'fill-[var(--md-radio-disabled-unselected-icon-color,rgb(var(--color-on-surface)))]'
      ]
    }
  }
})

const circle = tv({
  base: [],
  variants: {
    checked: {
      true: ''
    },
    outer: {
      true: '[transition:fill_50ms_linear]'
    },
    inner: {
      true: [
        'opacity-0',
        'ease-linear',
        'origin-center',
        'duration-[50ms]',
        'transition-opacity'
      ]
    }
  },
  compoundVariants: [
    {
      checked: true,
      inner: true,
      className: [
        'opacity-100',
        '[animation:300ms_cubic-bezier(0.05,0.7,0.1,1)_0s_1_normal_none_running_inner-circle-grow]'
      ]
    }
  ]
})

const RadioIcon = ({
  checked,
  disabled
}: {
  checked: boolean
  disabled: boolean
}) => {
  const id = useId()
  return (
    <>
      <svg
        className={icon({
          disabled
        })}
        viewBox="0 0 20 20"
      >
        <mask id={id}>
          <rect width="100%" height="100%" fill="white" />
          <circle cx="10" cy="10" r="8" fill="black" />
        </mask>
        <circle
          className={circle({ checked, outer: true })}
          cx="10"
          cy="10"
          r="10"
          mask={`url(#${id})`}
        />
        <circle
          className={circle({ checked, inner: true })}
          cx="10"
          cy="10"
          r="5"
        />
      </svg>
    </>
  )
}

Radio.displayName = 'Actify.Radio'

export default Radio
