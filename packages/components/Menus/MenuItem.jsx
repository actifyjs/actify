import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdMenuItem } from '@material/web/menu/menu-item'

const MenuItem = createComponent({
  react: React,
  tagName: 'md-menu-item',
  elementClass: MdMenuItem,
  displayName: 'Actify.MenuItem'
})

export default MenuItem
