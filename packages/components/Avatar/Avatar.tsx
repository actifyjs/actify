'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
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
      xs: 'w-6 h-6',
      sm: 'w-9 h-9',
      md: 'w-12 h-12',
      lg: 'w-[58px] h-[58px]',
      xl: 'w-[74px] h-[74px]',
      '2xl': 'w-[110px] h-[110px]'
    }
  },
  defaultVariants: {
    size: 'md',
    rounded: 'full'
  }
})

interface AvatarPropTypes
  extends VariantProps<typeof variants>,
    React.ImgHTMLAttributes<HTMLImageElement> {}

const Avatar: React.FC<AvatarPropTypes> = forwardRef(
  (props, ref: React.Ref<HTMLImageElement>) => {
    const { style, className, size, square, rounded, alt, src, ...rest } = props

    return (
      <img
        ref={ref}
        {...rest}
        style={style}
        alt={alt || 'avatar'}
        className={variants({ size, square, rounded, className })}
        src={src || 'https://avatars.githubusercontent.com/u/15228321?v=4'}
      />
    )
  }
)

Avatar.displayName = 'Actify.Avatar'

export default Avatar
