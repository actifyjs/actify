'use client'
import React, { useMemo, useId, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { FocusRing } from '@actify/FocusRing'
import { useRadio } from './RadioContext'

const root = tv({
  base: ['flex', 'items-center']
})

const inner = tv({
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
  ],
  variants: {
    disabled: {
      true: 'cursor-default'
    }
  }
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

export interface RadioItemProps extends React.ComponentPropsWithRef<'input'> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>((props, ref) => {
  const {
    name,
    style,
    value,
    children,
    className,
    color = 'primary',
    disabled = false,
    type = 'radio',
    ...rest
  } = props

  const id = useId()

  const { value: contextValue, onChange } = useRadio()

  const checked = useMemo(() => {
    return contextValue == value
  }, [value, contextValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }

  return (
    <div className={root({ className })}>
      <div style={style} className={inner({ disabled })}>
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
        <div aria-hidden="true" className={container({ color, checked })}>
          <Ripple
            id={id}
            disabled={disabled}
            className="rounded-full inset-[unset] size-10"
          />
          <FocusRing id={id} className="size-11 inset-[unset]" />
          <RadioIcon color={color} checked={checked} disabled={disabled} />
          <input
            id={id}
            ref={ref}
            {...rest}
            name={name}
            type={type}
            value={value}
            checked={checked}
            disabled={disabled}
            className={input()}
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor={id}>{children}</label>
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
    color: {
      primary:
        '[--selected-icon-color:var(--md-radio-selected-icon-color,rgb(var(--color-primary)))]',
      secondary:
        '[--selected-icon-color:var(--md-radio-selected-icon-color,rgb(var(--color-secondary)))]',
      tertiary:
        '[--selected-icon-color:var(--md-radio-selected-icon-color,rgb(var(--color-tertiary)))]',
      error:
        '[--selected-icon-color:var(--md-radio-selected-icon-color,rgb(var(--color-error)))]'
    },
    checked: {
      true: 'fill-[var(--selected-icon-color)]'
    },
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
  color,
  checked,
  disabled
}: {
  color: VariantProps<typeof icon>['color']
  checked: boolean
  disabled: boolean
}) => {
  const id = useId()
  return (
    <>
      <svg
        className={icon({
          color,
          checked,
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

export { RadioItem }
