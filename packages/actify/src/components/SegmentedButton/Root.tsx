import { tv, VariantProps } from 'tailwind-variants'
import { useSegmentedButtonContext } from './Context'
import { SegmentedButtonProps } from './SegmentedButton'
import React, { Children, isValidElement, cloneElement } from 'react'

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

interface RootProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof variants> {
  ripple?: boolean
}

const Root: React.FC<RootProps> = ({ color, ripple, variant, children }) => {
  const { multiple, activeIndex, setActiveIndex } = useSegmentedButtonContext()

  const handleClick = (index: number) => {
    if (multiple) {
      if (activeIndex?.includes(index)) {
        const arr = activeIndex.filter((i) => i !== index)
        setActiveIndex?.(arr)
      } else {
        setActiveIndex?.([index, ...activeIndex!])
      }
    } else {
      if (activeIndex?.includes(index)) {
        setActiveIndex?.([])
      } else {
        setActiveIndex?.([index])
      }
    }
  }

  return Children.map(
    children,
    (child, index) =>
      isValidElement(child) &&
      // @ts-expect-error
      cloneElement<SegmentedButtonProps>(child, {
        color,
        ripple,
        variant,
        id: `segmented-button-${JSON.stringify(activeIndex)}`,
        onClick: () => handleClick(index),
        className: variants({
          active: activeIndex?.includes(index),
          roundedRightNone: index !== Children.count(children) - 1,
          borderRightZero: index !== Children.count(children) - 1,
          roundedLeftNone: index !== 0,
          className: child.props.className
        })
      })
  )
}

export default Root
