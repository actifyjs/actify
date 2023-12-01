'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple, Elevation } from 'actify'

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
  elevation: '0' | '1' | '2' | '3' | '4' | '5'
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
