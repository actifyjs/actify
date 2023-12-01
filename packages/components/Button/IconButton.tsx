'use client'
import React, { forwardRef } from 'react'
import { Ripple } from 'actify'
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

interface IconButtonProps
  extends VariantProps<typeof variants>,
    React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  tag?: string
  ripple?: boolean
  size?: string | number
}

const IconButton = forwardRef<React.Ref<HTMLButtonElement>, IconButtonProps>(
  (props, ref) => {
    const {
      tag,
      ripple = true,
      style,
      size = 40,
      variant = 'standard',
      color = 'current',
      className,
      type = 'button',
      children,
      ...rest
    } = props
    const colorVariant = setColor(color)

    let Tag = ''
    // @ts-ignore
    if (rest.href) {
      Tag = 'a'
    } else if (tag) {
      Tag = tag
    } else {
      Tag = 'button'
    }

    return (
      // @ts-ignore
      <Tag
        ref={ref}
        {...rest}
        type={type}
        style={{ color: colorVariant, ...style }}
        className={variants({ className })}
      >
        {children}
        {ripple && <Ripple />}
      </Tag>
    )
  }
)

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
