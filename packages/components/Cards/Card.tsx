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
  elevation: string | number
}

const Card: React.FC<CardProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { ripple, type, elevation, children, className, ...rest } = props

    return (
      <div ref={ref} {...rest} className={variants({ type, className })}>
        <div className="relative overflow-hidden rounded-t-xl">{children}</div>
        {ripple && <Ripple />}
        // @ts-ignore
        {type === 'elevated' && <Elevation level={elevation} />}
      </div>
    )
  }
)

Card.defaultProps = {
  type: 'elevated',
  ripple: false,
  elevation: 1
}

Card.displayName = 'Actify.Card'

export default Card
