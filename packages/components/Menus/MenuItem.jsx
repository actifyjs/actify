import React, { forwardRef } from 'react'
import '@material/web/menu/menu-item'

const MenuItem = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <md-menu-item ref={ref} {...rest}>
      {children}
    </md-menu-item>
  )
})

MenuItem.displayName = 'Actify.MenuItem'

export default MenuItem
