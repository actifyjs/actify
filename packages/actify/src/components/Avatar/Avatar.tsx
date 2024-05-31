'use client'

import { VariantProps, tv } from 'tailwind-variants'

import React from 'react'

const root = tv({
  base: 'hover:z-10 inline-block relative object-cover object-center',
  variants: {
    rounded: {
      true: 'rounded-lg',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full'
    },
    square: {
      true: 'rounded-none'
    },
    size: {
      xs: 'size-6',
      sm: 'size-9',
      md: 'size-12',
      lg: 'size-[58px]',
      xl: 'size-[74px]',
      '2xl': 'size-[110px]'
    }
  },
  defaultVariants: {
    size: 'md',
    rounded: 'full'
  }
})

export interface AvatarProps
  extends React.ComponentProps<'img'>,
    VariantProps<typeof root> {}

const Avatar = (props: AvatarProps) => {
  const { className, size, square, rounded, alt, src, ...rest } = props

  return (
    <img
      {...rest}
      alt={alt || 'avatar'}
      className={root({ size, square, rounded, className })}
      src={src || 'https://avatars.githubusercontent.com/u/15228321?v=4'}
    />
  )
}

Avatar.displayName = 'Actify.Avatar'

export { Avatar }
