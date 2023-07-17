import React, { forwardRef } from 'react'
import '@material/web/menu/menu-item-link'

const MenuItemLink = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <md-menu-item-link ref={ref} {...rest}>
      {children}
    </md-menu-item-link>
  )
})

MenuItemLink.displayName = 'Actify.MenuItemLink'

export default MenuItemLink
