import { tv, VariantProps } from 'tailwind-variants'
import { useSegmentedButtonContext } from './Context'
import React, { Children, isValidElement, cloneElement } from 'react'

const root = tv({
  base: 'flex',
  variants: {
    variant: {
      elevated: '',
      filled: '',
      tonal: '',
      outlined: '',
      text: ''
    },
    color: {
      primary: '',
      secondary: '',
      tertiary: '',
      error: ''
    },
    active: {
      true: '',
      false: ''
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
  compoundVariants: [
    {
      active: true,
      color: 'primary',
      className: 'bg-primary-container'
    },
    {
      active: true,
      color: 'secondary',
      className: 'bg-secondary-container'
    },
    {
      active: true,
      color: 'tertiary',
      className: 'bg-tertiary-container'
    },
    {
      active: true,
      color: 'error',
      className: 'bg-error-container'
    }
  ]
})

export interface RootProps
  extends Omit<React.ComponentProps<'div'>, 'color'>,
    VariantProps<typeof root> {
  ripple?: boolean
}

const Root = ({
  ripple,
  color = 'primary',
  variant = 'outlined',
  children
}: RootProps) => {
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
      cloneElement<RootProps>(child, {
        color,
        ripple,
        variant,
        onClick: () => handleClick(index),
        className: root({
          color,
          variant,
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
