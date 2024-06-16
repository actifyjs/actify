'use client'

import React, { Children, cloneElement, isValidElement } from 'react'

import { tv } from 'tailwind-variants'

const variants = tv({
  base: [
    'flex',
    'p-2',
    'gap-2',
    'overflow-x-auto',
    '[&::-webkit-scrollbar]:hidden'
  ]
})
export interface TabsHeaderProps extends React.ComponentProps<'ul'> {}

const TabsHeader = (props: TabsHeaderProps) => {
  const { children, className, ...rest } = props

  return (
    <nav className="w-full">
      <ul {...rest} role="tablist" className={variants({ className })}>
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
      </ul>
    </nav>
  )
}

export { TabsHeader }
