import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdMenuItemLink } from '@material/web/menu/menu-item-link'

const MenuItemLink = createComponent({
  react: React,
  tagName: 'md-menu-item-link',
  elementClass: MdMenuItemLink,
  displayName: 'Actify.MenuItemLink'
})

export default MenuItemLink
