'use client'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { FocusRing } from '@actify/FocusRing'
import React, { useId, forwardRef, useState } from 'react'

const root = tv({
  base: [
    'flex',
    'p-2.5',
    'w-fit',
    'relative',
    'rounded-full',
    'items-center',
    'cursor-pointer'
  ]
})

const variants = tv({
  base: [
    'peer',
    'relative',
    'outline-none',
    'appearance-none',
    'border-outline',
    'cursor-pointer',
    'transition-all',
    "before:content['']",
    'before:block',
    'before:size-12',
    'before:rounded-full',
    'before:absolute',
    'before:top-1/2',
    'before:left-1/2',
    'before:-translate-y-1/2',
    'before:-translate-x-1/2',
    'before:opacity-0',
    'hover:before:opacity-10',
    'before:transition-opacity'
  ],
  variants: {
    size: {
      xs: 'size-5 border-2 rounded-sm',
      sm: 'size-7 border-[3px] rounded',
      md: 'size-9 border-4 rounded-md',
      lg: 'size-11 border-[5px] rounded-lg',
      xl: 'size-12 border-[6px] rounded-xl',
      '2xl': 'size-14 border-[7px] rounded-2xl'
    },
    color: {
      primary:
        'before:bg-primary checked:bg-primary checked:border-primary checked:before:bg-primary',
      secondary:
        'before:bg-secondary checked:bg-secondary checked:border-secondary checked:before:bg-secondary',
      tertiary:
        'before:bg-tertiary checked:bg-tertiary checked:border-tertiary checked:before:bg-tertiary',
      error:
        'before:bg-error checked:bg-error checked:border-error checked:before:bg-error'
    },
    disabled: {
      true: 'opacity-[.12] pointer-events-none'
    }
  },
  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
})

const checkVariants = tv({
  base: [
    'flex',
    'absolute',
    'inset-0',
    'top-1/2',
    'left-1/2',
    'opacity-0',
    'text-surface',
    'items-center',
    'justify-center',
    '-translate-y-1/2',
    '-translate-x-1/2',
    'transition-opacity',
    'pointer-events-none',
    'peer-checked:opacity-100'
  ]
})

type CheckPropTypes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color' | 'onChange'
> & {
  size?: VariantProps<typeof variants>['size']
  color?: VariantProps<typeof variants>['color']
  onChange?:
    | ((checked: boolean) => void)
    | ((e: React.ChangeEvent<HTMLInputElement>) => void)
}

const Checkbox: React.FC<CheckPropTypes> = forwardRef(
  (props, ref?: React.Ref<HTMLLabelElement>) => {
    const {
      size,
      title,
      color,
      style,
      checked,
      disabled,
      onChange,
      className,
      defaultChecked,
      ...rest
    } = props

    const id = useId()
    const isControlled = checked !== undefined

    const [inputValue, setInputValue] = isControlled
      ? [checked, onChange]
      : useState(defaultChecked || false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return
      }
      if (isControlled) {
        // @ts-expect-error
        setInputValue?.(e)
      } else {
        // @ts-expect-error
        setInputValue?.(e.target.checked)
        // @ts-expect-error
        onChange?.(e)
      }
    }

    return (
      <label ref={ref} title={title} className={root()}>
        <input
          id={id}
          {...rest}
          style={style}
          type="checkbox"
          disabled={disabled}
          onChange={handleChange}
          checked={isControlled ? inputValue : undefined}
          defaultChecked={!isControlled ? inputValue : undefined}
          className={variants({ size, color, disabled, className })}
        />
        <div className={checkVariants()}>
          <svg
            strokeWidth="1"
            className="h-2/3 w-2/3"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            />
          </svg>
        </div>
        <FocusRing id={id} />
        <Ripple id={id} disabled={disabled} />
      </label>
    )
  }
)

Checkbox.displayName = 'Actify.Checkbox'

export default Checkbox
