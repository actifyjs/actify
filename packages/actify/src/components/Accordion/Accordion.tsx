'use client'

import React, {
  Children,
  useState,
  forwardRef,
  cloneElement,
  isValidElement
} from 'react'
import { tv } from 'tailwind-variants'
import { AccordionContext, AccordionContextProps } from './AccordionContext'
import { AccordionItem } from './AccordionItem'
import { AccordionHeader } from './AccordionHeader'
import { AccordionContent } from './AccordionContent'

const variants = tv({
  base: 'rounded-lg flex flex-col gap-4 bg-surface p-4'
})

interface AccordionProps
  extends AccordionContextProps,
    React.HTMLAttributes<HTMLDivElement> {}

const AccordionRoot: React.FC<AccordionProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const {
      open: openProp,
      multiple,
      style,
      className,
      children,
      ...rest
    } = props
    const [open, setOpen] = useState<AccordionContextProps['open']>(
      openProp ?? []
    )

    return (
      <AccordionContext.Provider value={{ multiple, open, setOpen }}>
        <div
          ref={ref}
          {...rest}
          style={style}
          className={variants({ className })}
        >
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
      </AccordionContext.Provider>
    )
  }
)

AccordionRoot.displayName = 'Acitfy.Accordion'

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Content: AccordionContent
})

export default Accordion
