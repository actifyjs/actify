'use client'

import { AccordionProps, AccordionProvider } from './AccordionContext'
import {
  Children,
  ComponentProps,
  cloneElement,
  isValidElement,
  useState
} from 'react'

import { AccordionContent } from './AccordionContent'
import { AccordionHeader } from './AccordionHeader'
import { AccordionItem } from './AccordionItem'
import styles from './actify.module.css'

interface AccordionRootProps extends AccordionProps, ComponentProps<'div'> {}

const AccordionRoot = (props: AccordionRootProps) => {
  const { multiple, children, className, open: openProp, ...rest } = props
  const [open, setOpen] = useState<AccordionProps['open']>(openProp ?? [])

  return (
    <AccordionProvider {...{ open, setOpen, multiple }}>
      <div {...rest} className={styles['accordion']}>
        {Children.map(
          children,
          (child, index) =>
            isValidElement(child) &&
            cloneElement(child, {
              index,
              // @ts-ignore
              ...child.props
            })
        )}
      </div>
    </AccordionProvider>
  )
}

AccordionRoot.displayName = 'Acitfy.Accordion'

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Content: AccordionContent
})

export { Accordion }
