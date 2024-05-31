import { MdMenuItem } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const MenuItemWebComponent = createComponent({
  react: React,
  tagName: 'md-menu-item',
  elementClass: MdMenuItem
})

const MenuItem = ({
  ...rest
}: React.ComponentProps<typeof MenuItemWebComponent>) => {
  return <MenuItemWebComponent {...rest} />
}

export { MenuItem }
