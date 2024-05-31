import { MdSubMenu } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const SubMenu = createComponent({
  react: React,
  tagName: 'md-sub-menu',
  elementClass: MdSubMenu
})

export { SubMenu }
