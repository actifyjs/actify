import React from 'react'
import { MdMenu } from '@material/web/menu/menu'
import { createComponent } from '@lit-labs/react'

const Menu = createComponent({
  react: React,
  tagName: 'md-menu',
  elementClass: MdMenu,
  displayName: 'Actify.Menu'
})

export default Menu
