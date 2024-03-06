'use client'
import { tv } from 'tailwind-variants'
import React, {
  forwardRef,
  Children,
  isValidElement,
  cloneElement
} from 'react'

const variants = tv({
  base: ['block', 'w-full', 'relative', 'bg-transparent']
})

export interface TabsBodyProps extends React.ComponentProps<'div'> {}

const TabsBody = forwardRef<HTMLDivElement, TabsBodyProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {Children.map(
        children,
        (child, index) =>
          isValidElement(child) &&
          cloneElement(child, {
            index,
            ...child.props
          })
      )}
    </div>
  )
})

export { TabsBody }
