'use client'

import React, { Children, cloneElement, isValidElement } from 'react'

import { tv } from 'tailwind-variants'

const variants = tv({
  base: ['block', 'w-full', 'relative', 'bg-transparent']
})

export interface TabsBodyProps extends React.ComponentProps<'div'> {}

const TabsBody = (props: TabsBodyProps) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={variants({ className })}>
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
}

export { TabsBody }
