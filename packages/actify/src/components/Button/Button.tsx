'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'

const variants = tv({
  base: 'relative inline-flex gap-2 items-center justify-center select-none h-10 text-sm px-6 rounded-full transition-all duration-300 ease-in-out',
  variants: {
    color: {
      primary: 'bg-primary text-on-primary hover:bg-primary/90',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
      tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
      error: 'bg-error text-on-error hover:bg-error/90'
    },
    disabled: {
      true: 'bg-inverse-surface opacity-[.12] pointer-events-none'
    },
    variant: {
      filled: '',
      elevated: '',
      outlined: 'border border-outline',
      tonal:
        'bg-secondary-container text-on-surface hover:bg-secondary-container/60',
      text: ''
    }
  },
  compoundVariants: [
    {
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-primary hover:bg-primary/10'
    },
    {
      color: 'secondary',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-secondary hover:bg-secondary/10'
    },
    {
      color: 'tertiary',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-tertiary hover:bg-tertiary/10'
    },
    {
      color: 'error',
      variant: ['outlined', 'text'],
      className: 'bg-transparent text-error hover:bg-error/10'
    }
  ],
  defaultVariants: {
    variant: 'filled',
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

const Button = forwardRef(
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
      color = 'primary',
      variant = 'filled'
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
              variant,
              className
            })
          }}
        >
          {children}
          {ripple && <Ripple />}
          {variant === 'elevated' && <Elevation level={3} />}
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
            variant,
            disabled,
            className
          })
        }}
      >
        {children}
        {ripple && <Ripple />}
        {variant === 'elevated' && <Elevation level={3} />}
      </button>
    )
  }
)

Button.displayName = 'Actify.Button'

export default Button
