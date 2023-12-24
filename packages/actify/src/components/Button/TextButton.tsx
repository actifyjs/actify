'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'

const variants = tv({
  base: 'relative inline-flex gap-2 items-center justify-center select-none h-10 text-sm px-6 rounded-full transition-all duration-300 ease-in-out bg-transparent',
  variants: {
    color: {
      primary: 'hover:bg-primary/10',
      secondary: 'hover:bg-secondary/10',
      tertiary: 'hover:bg-tertiary/10',
      error: 'hover:bg-error/10'
    },
    disabled: {
      true: 'pointer-events-none'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement
interface ButtonProps<T extends ButtonTypes>
  extends VariantProps<typeof variants>,
    React.AnchorHTMLAttributes<T>,
    React.ButtonHTMLAttributes<T> {
  ripple?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const TextButton = forwardRef(
  <T extends ButtonTypes>(
    props: ButtonProps<T>,
    ref?: React.Ref<ButtonTypes>
  ) => {
    const {
      href,
      style,
      disabled,
      children,
      className,
      ripple = true,
      color = 'primary'
    } = props

    if (href) {
      return (
        <a
          href={href}
          style={style}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...{
            ...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>),
            className: variants({
              color,
              disabled,
              className
            })
          }}
        >
          {children}
          {ripple && <Ripple />}
        </a>
      )
    }

    return (
      <button
        style={style}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...{
          ...(props as React.ButtonHTMLAttributes<HTMLButtonElement>),
          className: variants({
            color,
            disabled,
            className
          })
        }}
      >
        {children}
        {ripple && !disabled && <Ripple />}
      </button>
    )
  }
)

export default TextButton
