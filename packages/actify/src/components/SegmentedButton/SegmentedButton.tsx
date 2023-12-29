'use client'
import Root from './Root'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { SegmentedButtonProvider } from './Context'

const variants = tv({
  base: 'flex',
  variants: {
    variant: {
      elevated: 'divide-x divide-surface',
      filled: 'divide-x divide-surface',
      tonal: 'divide-x divide-surface',
      outlined: 'divide',
      text: 'divide-x divide-surface'
    },
    active: {
      true: 'bg-secondary-container'
    },
    roundedRightNone: {
      true: 'rounded-r-none'
    },
    borderRightZero: {
      true: 'border-r-0'
    },
    roundedLeftNone: {
      true: 'rounded-l-none'
    }
  },
  defaultVariants: {
    variant: 'filled'
  }
})

export interface SegmentedButtonProps
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLDivElement> {
  ripple?: boolean
  mutiple?: boolean
}

const SegmentedButton: React.FC<SegmentedButtonProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const {
      color,
      style,
      variant,
      mutiple,
      className,
      children,
      ripple = true,
      ...rest
    } = props

    return (
      <SegmentedButtonProvider multiple={mutiple}>
        <div
          ref={ref}
          {...rest}
          style={style}
          className={variants({ variant })}
        >
          <Root {...{ color, ripple, variant }}>{children}</Root>
        </div>
      </SegmentedButtonProvider>
    )
  }
)

SegmentedButton.displayName = 'Actify.SegmentedButton'

export { SegmentedButton }
