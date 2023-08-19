import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'
import React, { forwardRef } from 'react'

const variants = tv({
  base: ''
})

const TabPanel = forwardRef((props, ref) => {
  const { active } = useTabs()
  const { value, className, children, ...rest } = props

  return (
    <div role="tabpanel" data-value={value} ref={ref} {...rest} className={variants({ className })}>
      {active == value && children}
    </div>
  )
})

export default TabPanel
