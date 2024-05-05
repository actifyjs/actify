'use client'
import React, { Children, isValidElement, cloneElement } from 'react'
import { Elevation } from './../Elevation'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative flex h-20 w-full max-w-xs items-center justify-between bg-primary px-4'
})

type DivProps = React.HTMLAttributes<HTMLDivElement>

const BottomAppBar: React.FC<DivProps> = ({ className, children }) => {
  return (
    <div className={variants({ className })}>
      {children}
      <Elevation level={2} />
    </div>
  )
}

const Icons: React.FC<DivProps> = ({ children }) => {
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

const Fab: React.FC<DivProps> = ({ children }) => {
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
