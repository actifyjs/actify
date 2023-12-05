'use client'
import { Ripple } from '@actify/Ripple'
import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { setColor } from './../../utils'

const labelVariants = tv({
  base: 'relative overflow-hidden flex items-center cursor-pointer p-2.5 rounded-full',
  variants: {
    disabled: {
      true: 'opacity-[.12] pointer-events-none'
    }
  }
})

const variants = tv({
  base: "peer relative appearance-none rounded-full border-outline checked:border-current cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:text-current after:absolute after:-inset-3 hover:after:bg-inverse-surface/10",
  variants: {
    size: {
      xs: 'w-5 h-5 border-2',
      sm: 'w-7 h-7 border-[3px]',
      md: 'w-9 h-9 border-4',
      lg: 'w-11 h-11 border-[5px]',
      xl: 'w-12 h-12 border-[6px]',
      '2xl': 'w-14 h-14 border-[7px]'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

const dotVariants = tv({
  base: 'absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity peer-checked:text-current'
})

interface RadioProps extends React.HTMLAttributes<HTMLElement> {
  name?: string
  value?: string
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Radio: React.FC<RadioProps> = forwardRef(
  (props, ref?: React.Ref<HTMLInputElement>) => {
    const {
      title,
      style,
      className,
      size,
      color,
      disabled,
      children,
      ...rest
    } = props
    const colorVariants = setColor(color ?? 'primary')

    return (
      <label
        title={title}
        style={{ color: colorVariants }}
        className={labelVariants({ disabled })}
      >
        <input
          {...rest}
          ref={ref}
          type="radio"
          style={style}
          disabled={disabled}
          className={variants({ size, className })}
        />
        <div className={dotVariants()}>
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-1/2 h-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8"></circle>
          </svg>
        </div>
        <Ripple />
      </label>
    )
  }
)

Radio.displayName = 'Actify.Radio'

export default Radio
