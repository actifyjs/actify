import React, { useEffect, useRef, forwardRef } from 'react'
import '@material/web/tabs/tabs'

import { setColor } from '@/packages/utils'

const Tabs = forwardRef((props, ref) => {
  const tabsRef = ref || useRef()
  const { style, color, children, onChange, className, ...rest } = props
  let styles = {
    ...style
  }
  if (color) {
    styles['--md-sys-color-primary'] = setColor(color)
  }

  useEffect(() => {
    tabsRef.current.addEventListener('change', onChange)
  }, [])

  return (
    <md-tabs ref={tabsRef} {...rest} class={className} style={{ ...styles }}>
      {children}
    </md-tabs>
  )
})

export default Tabs
