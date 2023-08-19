import React from 'react'
import { tv } from 'tailwind-variants'
import { TabsProvider } from './TabsContext'

const variants = tv({
  base: 'relative overflow-hidden'
})

const Tabs = React.forwardRef((props, ref) => {
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
