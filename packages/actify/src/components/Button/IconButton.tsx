'use client'
import React, { forwardRef } from 'react'
import { Ripple } from '@actify/Ripple'
import { tv, VariantProps } from 'tailwind-variants'

import { setColor } from '@utils/index'

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
  tag?: string
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
      tag,
      style,
      disabled,
      children,
      className,
      ripple = true,
      type = 'button',
      color = 'current',
      variant = 'standard',
      ...rest
    } = props

    let Tag = ''
    if (rest.href) {
      Tag = 'a'
    } else if (tag) {
      Tag = tag
    } else {
      Tag = 'button'
    }

    return (
      // @ts-expect-error
      <Tag
        ref={ref}
        {...rest}
        type={Tag == 'button' ? type : null}
        className={variants({ className })}
        style={{ color: setColor(color), ...style }}
      >
        {children}
        {ripple && <Ripple />}
      </Tag>
    )
  }
)

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
