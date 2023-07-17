import React, { forwardRef } from 'react'
import '@material/web/menu/menu'

const Menu = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <md-menu ref={ref} {...rest}>
      {children}
    </md-menu>
  )
})

Menu.displayName = 'Actify.Menu'

export default Menu
