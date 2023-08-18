import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { TabsProvider } from './TabContext'

const variants = tv({
  base: 'relative overflow-hidden'
})

const Tabs = forwardRef((props, ref) => {
  const { value, className, children, ...rest } = props
  return (
    <TabsProvider value={value}>
      <div ref={ref} {...rest} className={variants({ className })}>
        {children}
      </div>
    </TabsProvider>
  )
})

export default Tabs
