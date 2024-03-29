'use client'
import { tv } from 'tailwind-variants'
import { useDrawer } from './DrawerContext'
import React, { forwardRef, isValidElement, cloneElement } from 'react'

const variants = tv({
  base: ''
})

export interface DrawerActivatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const DrawerActivator = forwardRef<HTMLDivElement, DrawerActivatorProps>(
  (props, ref) => {
    const { setOpen } = useDrawer()
    const { style, className, asChild, children, ...rest } = props

    const handleClick = () => {
      setOpen?.(true)
    }

    // `asChild` allows the user to pass any element as the activator
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ref,
        ...rest,
        ...children.props,
        role: 'button',
        onClick: handleClick
      })
    }

    return (
      <div
        ref={ref}
        {...rest}
        role="button"
        style={style}
        onClick={handleClick}
        className={variants({ className })}
      >
        {children}
      </div>
    )
  }
)

export { DrawerActivator }
