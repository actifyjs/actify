import React, { useEffect, useRef, forwardRef } from 'react'
import '@material/web/tabs/tabs'

const Tabs = forwardRef((props, ref) => {
  const { children, onChange, className, ...rest } = props
  const tabsRef = ref || useRef()
  useEffect(() => {
    tabsRef.current.addEventListener('change', onChange)
  }, [])

  return (
    <md-tabs ref={tabsRef} {...rest} class={className}>
      {children}
    </md-tabs>
  )
})

export default Tabs
