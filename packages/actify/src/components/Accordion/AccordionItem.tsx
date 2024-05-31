'use client'

import React, { Children, cloneElement, isValidElement } from 'react'

import clsx from 'clsx'

export interface AccordionItemProps extends React.ComponentProps<'div'> {
  index?: number
  children: React.ReactNode
}

const AccordionItem = (props: AccordionItemProps) => {
  const { index, className, children, ...rest } = props

  return (
    <div {...rest} className={clsx('a-accordion-item', className)}>
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

export { AccordionItem }
