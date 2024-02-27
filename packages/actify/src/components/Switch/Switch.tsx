'use client'
import { tv } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { FocusRing } from '@actify/FocusRing'
import React, { useState, forwardRef, useId } from 'react'

const input = tv({
  base: [
    'm-0',
    'h-12',
    'z-[1]',
    'w-full',
    'absolute',
    'outline-none',
    'appearance-none',
    'cursor-[inherit]'
  ]
})

const root = tv({
  base: [
    'inline-flex',
    'outline-none',
    'cursor-pointer',
    '[vertical-align:top]',
    '[-webkit-tap-highlight-color:rgba(0,0,0,0)]'
  ]
})

const switcher = tv({
  base: [
    'items-center',
    'inline-flex',
    'shrink-0',
    'relative',
    'w-[var(--md-switch-track-width,52px)]',
    'h-[var(--md-switch-track-height,32px)]',
    '[border-start-start-radius:var(--md-switch-track-shape-start-start,var(--md-switch-track-shape,var(--md-sys-shape-corner-full,9999px)))]',
    '[border-start-end-radius:var(--md-switch-track-shape-start-end,var(--md-switch-track-shape,var(--md-sys-shape-corner-full,9999px)))]',
    '[border-end-end-radius:var(--md-switch-track-shape-end-end,var(--md-switch-track-shape,var(--md-sys-shape-corner-full,9999px)))]',
    '[border-end-start-radius:var(--md-switch-track-shape-end-start,var(--md-switch-track-shape,var(--md-sys-shape-corner-full,9999px)))]'
  ]
})

const touch = tv({
  extend: input,
  base: []
})

const track = tv({
  base: [
    'flex',
    'w-full',
    'h-full',
    'absolute',
    'box-border',
    'items-center',
    'justify-center',
    'rounded-[inherit]',
    // ::before
    'before:flex',
    'before:absolute',
    'before:w-full',
    'before:h-full',
    'before:rounded-[inherit]',
    'before:box-border',
    'before:transition-[opacity,background-color]',
    'before:duration-[67ms]',
    'before:ease-linear'
  ],
  variants: {
    color: {
      primary: {},
      secondary: {},
      tertiary: {},
      error: {}
    },
    selected: {
      // true: 'before:[background-color:var(--md-switch-selected-track-color,rgb(var(--color-primary)))]',
      false: [
        'before:border-solid',
        'before:[border-width:var(--md-switch-track-outline-width,2px)]',
        'before:border-[var(--md-switch-track-outline-color,var(--md-sys-color-outline,#79747e))]',
        'before:[background-color:var(--md-switch-track-color,var(--md-sys-color-surface-container-highest,#e6e0e9))]'
      ]
    }
  },
  compoundVariants: [
    {
      selected: true,
      color: 'primary',
      className:
        'before:[background-color:var(--md-switch-selected-track-color,rgb(var(--color-primary)))]'
    },
    {
      selected: true,
      color: 'secondary',
      className:
        'before:[background-color:var(--md-switch-selected-track-color,rgb(var(--color-secondary)))]'
    },
    {
      selected: true,
      color: 'tertiary',
      className:
        'before:[background-color:var(--md-switch-selected-track-color,rgb(var(--color-tertiary)))]'
    },
    {
      selected: true,
      color: 'error',
      className:
        'before:[background-color:var(--md-switch-selected-track-color,rgb(var(--color-error)))]'
    }
  ],
  defaultVariants: {
    color: 'primary'
  }
})

const handleContainer = tv({
  base: [
    'flex',
    'relative',
    'place-items-center',
    'place-content-center',
    '[transition:margin_300ms_cubic-bezier(0.175,0.885,0.32,1.275)_0s]'
  ],
  variants: {
    selected: {
      true: 'ms-[calc(var(--md-switch-track-width,52px)_-_var(--md-switch-track-height,32px))]',
      false:
        'me-[calc(var(--md-switch-track-width,52px)_-_var(--md-switch-track-height,32px))]'
    }
  }
})

const handle = tv({
  base: [
    'z-0',
    'origin-center',
    'transition-[height,width]',
    'duration-[250ms,250ms]',
    '[transition-timing-function:cubic-bezier(0.2,0,0,1),cubic-bezier(0.2,0,0,1)]',
    '[border-start-start-radius:var(--md-switch-handle-shape-start-start,var(--md-switch-handle-shape,var(--md-sys-shape-corner-full,9999px)))]',
    '[border-start-end-radius:var(--md-switch-handle-shape-start-end,var(--md-switch-handle-shape,var(--md-sys-shape-corner-full,9999px)))]',
    '[border-end-end-radius:var(--md-switch-handle-shape-end-end,var(--md-switch-handle-shape,var(--md-sys-shape-corner-full,9999px)))]',
    '[border-end-start-radius:var(--md-switch-handle-shape-end-start,var(--md-switch-handle-shape,var(--md-sys-shape-corner-full,9999px)))]',
    // ::before
    'before:flex',
    'before:absolute',
    'before:inset-0',
    'before:rounded-[inherit]',
    'before:box-border',
    '[transition:background-color_67ms_linear_0s]'
  ],
  variants: {
    selected: {
      true: [
        'w-[var(--md-switch-handle-width,24px)]',
        'h-[var(--md-switch-handle-height,24px)]',
        '[background-color:var(--md-switch-selected-handle-color,var(--md-sys-color-on-primary,#fff))]'
      ],
      false: [
        'w-[var(--md-switch-handle-width,16px)]',
        'h-[var(--md-switch-handle-height,16px)]',
        '[background-color:var(--md-switch-handle-color,var(--md-sys-color-outline,#79747e))]'
      ]
    }
  }
})

const icon = tv({
  base: [
    'flex',
    'm-auto',
    'inset-0',
    'absolute',
    'fill-current',
    'items-center',
    'justify-center',
    '[transition:fill_67ms_linear_0s,opacity_33ms_linear_0s,transform_167ms_cubic-bezier(0.2,0,0,1)_0s]'
  ],
  variants: {
    selected: {
      true: 'opacity-100',
      false: 'opacity-0'
    }
  }
})

interface SwitchProps extends React.ComponentPropsWithRef<'input'> {
  icons?: boolean
  selected?: boolean
  defaultSelected?: boolean
  showOnlySelectedIcon?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    icons,
    style,
    color,
    onChange,
    className,
    disabled = false,
    selected = false,
    defaultSelected,
    showOnlySelectedIcon,
    ...rest
  } = props

  const id = useId()
  const [checked, setChecked] = useState(
    defaultSelected == undefined ? selected : defaultSelected
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    setChecked(event.target.checked)
  }

  const shouldShowIcons = () => {
    return icons || showOnlySelectedIcon
  }

  const renderIcons = () => {
    return (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" className={icon({ selected })}>
          <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
        {!showOnlySelectedIcon && (
          <svg viewBox="0 0 24 24" className={icon({ selected: !selected })}>
            <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
          </svg>
        )}
      </div>
    )
  }

  return (
    <div role="presentation" style={style} className={root({ className })}>
      <div className={switcher()}>
        <input
          id={id}
          {...rest}
          ref={ref}
          role="switch"
          type="checkbox"
          checked={checked}
          className={touch()}
          onChange={handleChange}
        />
        <FocusRing id={id} />
        <span
          className={track({
            color,
            selected: checked
          })}
        >
          <span
            className={handleContainer({
              selected: checked
            })}
          >
            <Ripple
              id={id}
              disabled={disabled}
              className="rounded-full inset-[unset] size-10"
            />
            <span
              className={handle({
                selected: checked
              })}
            >
              {shouldShowIcons() && renderIcons()}
            </span>
          </span>
        </span>
      </div>
    </div>
  )
})

Switch.displayName = 'Actify.Switch'

export default Switch
