'use client'

import React, { Children, cloneElement, isValidElement } from 'react'

import { Elevation } from './../Elevation'
import { tv } from 'tailwind-variants'

const root = tv({
  base: [
    'px-4',
    'flex',
    'h-20',
    'w-full',
    'relative',
    'max-w-xs',
    'bg-primary',
    'items-center',
    'justify-between'
  ]
})

interface BottomAppBarProps extends React.ComponentProps<'div'> {}
const BottomAppBar = ({ className, children }: BottomAppBarProps) => {
  return (
    <div className={root({ className })}>
      {children}
      <Elevation className="[--md-elevation-level:2]" />
    </div>
  )
}

const Icons = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grow place-items-center grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))]">
      {Children.map(
        children,
        (child, index) =>
          isValidElement(child) &&
          index <= 3 &&
          cloneElement(child, {
            ...child.props,
            className: 'cursor-pointer'
          })
      )}
    </div>
  )
}

const Fab = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="me-1 min-w-[48px] flex h-full relative items-center justify-center">
      {children}
    </div>
  )
}

BottomAppBar.displayName = 'Actify.BottomAppBar'

export default Object.assign(BottomAppBar, {
  Icons,
  Fab
})
