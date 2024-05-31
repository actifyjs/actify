'use client'

import React, { useMemo } from 'react'

import { Slot } from './../Slot'
import clsx from 'clsx'
import { useAccordion } from './AccordionContext'

export interface AccordionContentProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  index?: number
  asChild?: boolean
  children?: ((_?: any) => React.ReactNode) | React.ReactNode
}

const AccordionContent = (props: AccordionContentProps) => {
  const { index, className, asChild, children, ...rest } = props
  const { open } = useAccordion()

  const active = useMemo(() => {
    if (open !== undefined) {
      return open[index as number]
    }
  }, [open, index])

  const classes = clsx('a-accordion-content', { active }, className)

  if (asChild) {
    return (
      <Slot
        {...{
          active,
          ...rest
        }}
        className={classes}
      >
        {typeof children === 'function' ? children({ active }) : children}
      </Slot>
    )
  }

  return (
    <div {...rest} className={classes}>
      <p style={{ overflow: 'hidden' }}>{children as React.ReactNode}</p>
    </div>
  )
}

export { AccordionContent }
