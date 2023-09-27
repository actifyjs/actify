import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useDrawer } from './DrawerContext'

const variants = tv({
  base: ''
})

const DrawerActivator = forwardRef((props, ref) => {
  const { setOpen } = useDrawer()
  const { style, className, children, ...rest } = props

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <div
      ref={ref}
      {...rest}
      style={style}
      onClick={handleClick}
      className={variants({ className })}
    >
      {children}
    </div>
  )
})

export { DrawerActivator }
