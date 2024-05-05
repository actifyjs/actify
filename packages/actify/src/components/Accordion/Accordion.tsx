'use client'

import {
  Children,
  useState,
  forwardRef,
  cloneElement,
  isValidElement,
  ComponentPropsWithRef
} from 'react'
import { tv } from 'tailwind-variants'

import { AccordionItem } from './AccordionItem'
import { AccordionHeader } from './AccordionHeader'
import { AccordionContent } from './AccordionContent'
import { AccordionProps, AccordionProvider } from './AccordionContext'

const variants = tv({
  base: 'rounded-lg flex flex-col gap-4 bg-surface p-4'
})

interface AccordionRootProps
  extends AccordionProps,
    ComponentPropsWithRef<'div'> {}

const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>(
  (props, ref) => {
    const {
      style,
      multiple,
      children,
      className,
      open: openProp,
      ...rest
    } = props
    const [open, setOpen] = useState<AccordionProps['open']>(openProp ?? [])

    return (
      <AccordionProvider {...{ open, setOpen, multiple }}>
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
      </AccordionProvider>
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
