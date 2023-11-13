import React, {
  forwardRef,
  Children,
  isValidElement,
  cloneElement
} from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'rounded-md border p-4'
})

const AccordionItem = forwardRef((props, ref) => {
  const { style, className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} style={style} className={variants({ className })}>
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            index: rest.index,
            ...child.props
          })
      )}
    </div>
  )
})

export { AccordionItem }
