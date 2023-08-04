import React, { forwardRef } from 'react'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'
import Ripple from '@/packages/components/Ripple'
import Elevation from '@/packages/components/Elevation'

const cardStyles = cva('relative cursor-pointer mb-2 inline-flex flex-col rounded-xl border p-4', {
  variants: {
    color: {
      primary: 'bg-primary text-on-primary hover:bg-primary/90',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90',
      tertiary: 'bg-tertiary text-tertiary hover:bg-tertiary/90',
      error: 'bg-error text-error hover:bg-error/90'
    },
    variant: {
      elevated: 'bg-transparent hover:text-surface',
      filled: '',
      outlined: 'bg-transparent hover:text-surface'
    }
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled'
  }
})

const Card = forwardRef((props, ref) => {
  const { color, variant, children, className, ...rest } = props

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        cardStyles({
          color,
          variant,
          className
        })
      )}
    >
      {children}
      <Ripple />
      <Elevation level="1" />
    </div>
  )
})

Card.displayName = 'Actify.Card'

export default Card
