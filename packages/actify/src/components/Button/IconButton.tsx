'use client'
import React, { forwardRef } from 'react'
import { Ripple } from '@actify/Ripple'
import { tv, VariantProps } from 'tailwind-variants'

import { setColor } from './../../utils'

const variants = tv({
  base: 'relative inline-flex h-10 w-10 rounded-full items-center justify-center hover:bg-inverse-surface/25 transition-all duration-300 ease-in-out',
  variants: {
    variant: {
      standard: '',
      outlined: '',
      filled: '',
      'filled-tonal': ''
    }
  }
})

type IconButtonTypes = HTMLAnchorElement | HTMLButtonElement
interface IconButtonProps<T extends IconButtonTypes>
  extends VariantProps<typeof variants>,
    React.AnchorHTMLAttributes<T>,
    React.ButtonHTMLAttributes<T> {
  href?: string
  ripple?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
}

const IconButton = forwardRef(
  <T extends IconButtonTypes>(
    props: IconButtonProps<T>,
    ref?: React.Ref<IconButtonTypes>
  ) => {
    const {
      href,
      style,
      disabled,
      children,
      className,
      ripple = true,
      type = 'button',
      color = 'current',
      variant = 'standard'
    } = props
    const colorVariant = setColor(color)

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={{ color: colorVariant, ...style }}
          {...{
            ...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>),
            className: variants({
              variant,
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
        type={type}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        style={{ color: colorVariant, ...style }}
        {...{
          ...(props as React.ButtonHTMLAttributes<HTMLButtonElement>),
          className: variants({
            variant,
            className
          })
        }}
      >
        {children}
        {ripple && <Ripple />}
      </button>
    )
  }
)

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
