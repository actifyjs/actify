'use client'
import { Ripple } from './../Ripple'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Elevation, ElevationProps } from './../Elevation'

const variants = tv({
  base: 'relative inline-flex flex-col rounded-xl',
  variants: {
    type: {
      elevated: '',
      filled: 'bg-inverse-surface',
      outlined: 'border border-outline'
    }
  },
  defaultVariants: {
    type: 'elevated'
  }
})

interface CardProps
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLDivElement> {
  ripple?: boolean
  elevation?: ElevationProps['level']
}

const Card: React.FC<CardProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const {
      ripple = false,
      type = 'elevated',
      elevation = '1',
      children,
      className,
      ...rest
    } = props

    return (
      <div ref={ref} {...rest} className={variants({ type, className })}>
        <div className="relative overflow-hidden rounded-t-xl">{children}</div>
        {ripple && <Ripple />}
        {type === 'elevated' && <Elevation level={elevation} />}
      </div>
    )
  }
)

Card.displayName = 'Actify.Card'

export default Card
