import React from 'react'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: 'relative w-full flex items-center justify-center gap-2 py-1 px-2 text-base font-normal leading-relaxed select-none cursor-pointer'
})

const Tab = React.forwardRef((props, ref) => {
  const { setActive } = useTabs()
  const { className, value, children, ...rest } = props

  return (
    <li
      role="tab"
      {...rest}
      ref={ref}
      data-value={value}
      onClick={() => setActive(value)}
      className={variants({ className })}
    >
      {children}
    </li>
  )
})

export default Tab
