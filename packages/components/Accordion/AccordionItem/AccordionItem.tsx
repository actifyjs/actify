'use client'
import React, {
  forwardRef,
  Children,
  isValidElement,
  cloneElement
} from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'rounded-md border p-4'
})

interface ItemProps
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLDivElement> {
  index: number
  children: React.ReactNode
}

const AccordionItem: React.FC<ItemProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, style, className, children, ...rest } = props

    return (
      <div
        ref={ref}
        {...rest}
        style={style}
        className={variants({ className })}
      >
        {Children.map(
          children,
          (child) =>
            isValidElement(child) &&
            cloneElement(child, {
              index,
              ...child.props
            })
        )}
      </div>
    )
  }
)

export { AccordionItem }
