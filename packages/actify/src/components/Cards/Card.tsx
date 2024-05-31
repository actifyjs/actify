'use client'

import { VariantProps, tv } from 'tailwind-variants'

import { Elevation } from './../Elevation'
import React from 'react'
import { Ripple } from './../Ripple'

const root = tv({
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
  extends VariantProps<typeof root>,
    React.ComponentProps<'div'> {
  ripple?: boolean
  elevation?: number
}

const Card = (props: CardProps) => {
  const {
    id,
    ripple = false,
    type = 'elevated',
    elevation = 1,
    children,
    className,
    ...rest
  } = props

  const cardId = id || `actify-card${React.useId()}`

  return (
    <div {...rest} className={root({ type, className })}>
      <div className="relative overflow-hidden rounded-t-xl">{children}</div>
      {ripple && <Ripple id={cardId} />}
      {type === 'elevated' && (
        <Elevation className={`[--md-elevation-level:${elevation}]`} />
      )}
    </div>
  )
}

Card.displayName = 'Actify.Card'

export { Card }
