'use client'

import React, { useMemo } from 'react'

import { Slot } from './../Slot'
import { Text } from './../Text'
import clsx from 'clsx'
import styles from './actify.module.css'
import { useAccordion } from './AccordionContext'

export interface AccordionContentProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  index?: number
  asChild?: boolean
  children?:
    | ((props: { active?: boolean }) => React.ReactNode)
    | React.ReactNode
}

const AccordionContent = (props: AccordionContentProps) => {
  const { index, className, asChild, children, ...rest } = props
  const { open } = useAccordion()

  const active = useMemo(() => {
    if (open !== undefined) {
      return open[index as number]
    }
  }, [open, index])

  const classes = clsx(
    styles['accordion-content'],
    active && styles['active'],
    className
  )

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
      <Text style={{ overflow: 'hidden' }}>{children as React.ReactNode}</Text>
    </div>
  )
}

export { AccordionContent }
