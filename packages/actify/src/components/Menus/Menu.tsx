import { MdMenu } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const MenuWebComponent = createComponent({
  react: React,
  tagName: 'md-menu',
  elementClass: MdMenu
})

const Menu = ({ ...rest }: React.ComponentProps<typeof MenuWebComponent>) => {
  return <MenuWebComponent {...rest} />
}

export { Menu }
