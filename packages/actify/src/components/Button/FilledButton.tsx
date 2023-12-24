'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'

const variants = tv({
  base: 'relative inline-flex gap-2 items-center justify-center select-none h-10 text-sm px-6 rounded-full transition-all duration-300 ease-in-out',
  variants: {
    color: {
      primary: 'interactive-bg-primary',
      secondary: 'interactive-bg-secondary',
      tertiary: 'interactive-bg-tertiary',
      error: 'interactive-bg-error'
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

const FilledButton = forwardRef(
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

export default FilledButton
