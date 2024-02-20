'use client'
import React, { useId, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { FocusRing } from '@actify/FocusRing'

import { setColor } from '@utils/index'

const variants = tv({
  base: [
    'size-10',
    'relative',
    'outline-none',
    'ease-in-out',
    'inline-flex',
    'rounded-full',
    'duration-300',
    'items-center',
    'justify-center',
    'transition-all',
    'hover:bg-inverse-surface/25'
  ],
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

    const id = useId()

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
        id={id}
        {...rest}
        type={Tag == 'button' ? type : null}
        className={variants({ className })}
        style={{ color: setColor(color), ...style }}
      >
        <FocusRing id={id} />
        {children}
        {ripple && <Ripple id={id} disabled={disabled} />}
      </Tag>
    )
  }
)

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
