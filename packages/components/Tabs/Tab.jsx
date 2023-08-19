import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'
import React, { forwardRef } from 'react'

const variants = tv({
  base: 'flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer',
  variants: {
    active: {
      true: 'bg-primary rounded'
    }
  }
})

const Tab = forwardRef((props, ref) => {
  const { active, setActive } = useTabs()
  const { className, value, children, ...rest } = props

  return (
    <li
      role="tab"
      {...rest}
      ref={ref}
      data-value={value}
      onClick={() => setActive(value)}
      className={variants({ active: active == value, className })}
    >
      {children}
    </li>
  )
})

export default Tab
