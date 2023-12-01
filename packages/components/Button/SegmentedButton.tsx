'use client'
import React, {
  forwardRef,
  Children,
  isValidElement,
  cloneElement
} from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'flex',
  variants: {
    variant: {
      elevated: 'divide-x divide-surface',
      filled: 'divide-x divide-surface',
      tonal: 'divide-x divide-surface',
      outlined: '',
      text: 'divide-x divide-surface'
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

interface SegmentedButtonProps
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLDivElement> {
  ripple?: boolean
}

const SegmentedButton: React.FC<SegmentedButtonProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { variant, color, ripple, style, className, children, ...rest } =
      props

    return (
      <div ref={ref} {...rest} style={style} className={variants({ variant })}>
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) &&
            cloneElement(child, {
              // @ts-ignore
              variant,
              color,
              ripple,
              className: variants({
                roundedRightNone: index !== Children.count(children) - 1,
                borderRightZero: index !== Children.count(children) - 1,
                roundedLeftNone: index !== 0,
                className: child.props.className
              })
            })
        )}
      </div>
    )
  }
)

SegmentedButton.defaultProps = {
  ripple: true
}

SegmentedButton.displayName = 'Actify.SegmentedButton'

export { SegmentedButton }
