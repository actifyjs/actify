'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'

const variants = tv({
  base: 'relative inline-flex gap-2 items-center justify-center select-none h-10 text-sm px-6 py-2 rounded-full transition-all duration-300 ease-in-out interactive-bg-surface font-medium tracking-wide',
  variants: {
    color: {
      primary: 'text-primary hover:bg-primary/5',
      secondary: 'text-secondary hover:bg-secondary/5',
      tertiary: 'text-tertiary hover:bg-tertiary/5',
      error: 'text-error hover:bg-error/5'
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

const ElevatedButton = forwardRef(
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
          <Elevation level={1} />
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
        <Elevation level={1} />
      </button>
    )
  }
)

export default ElevatedButton
