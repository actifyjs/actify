'use client'

import { AccordionProps, AccordionProvider } from './AccordionContext'
import {
  Children,
  ComponentProps,
  cloneElement,
  isValidElement,
  useState
} from 'react'

import styles from './accordion.module.css'

interface AccordionRootProps extends AccordionProps, ComponentProps<'div'> {}

const Accordion = (props: AccordionRootProps) => {
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

Accordion.displayName = 'Acitfy.Accordion'

export { Accordion }
