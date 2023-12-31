'use client'
import Root from './Root'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { SegmentedButtonProvider } from './Context'

const variants = tv({
  base: 'flex font-medium tracking-wide',
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

export interface SegmentedButtonProps {
  color?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  ripple?: boolean
  multiple?: boolean
  activeIndex?: number[]
  variant?: VariantProps<typeof variants>['variant']
  onChange?: (_: number[]) => void
  setMutiple?: (value: boolean) => void
  setActiveIndex?: (value: number[]) => void
}

const SegmentedButton: React.FC<SegmentedButtonProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const {
      color,
      style,
      variant,
      multiple,
      className,
      children,
      onChange,
      activeIndex,
      ripple = true,
      ...rest
    } = props

    return (
      <SegmentedButtonProvider {...{ activeIndex, multiple, onChange }}>
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
