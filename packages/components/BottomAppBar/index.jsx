import React, { Children, isValidElement, cloneElement } from 'react'
import { Elevation } from 'actify'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative flex h-20 w-full max-w-xs items-center justify-between bg-primary px-4'
})

const BottomAppBarRoot = ({ className, children }) => {
  const icons = Children.map(children, (child) =>
    child?.type?.name === 'Icons' ? child : null
  )

  const fab = Children.map(children, (child) =>
    child?.type?.name === 'Fab' ? child : null
  )

  const hasFab = fab.length > 0
  const hasIcons = icons.length > 0

  return (
    <div className={variants({ className })}>
      {hasIcons && (
        <div className="grow place-items-center grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))]">
          {icons}
        </div>
      )}
      {hasFab && fab}
      <Elevation level={2} />
    </div>
  )
}

const Icons = ({ children }) => {
  return (
    <>
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
    </>
  )
}

const Fab = ({ children }) => {
  return (
    <div className="[margin-inline-end:4px] min-w-[48px] flex h-full relative items-center justify-center">
      {children}
    </div>
  )
}

export const BottomAppBar = Object.assign(BottomAppBarRoot, {
  Icons,
  Fab
})
