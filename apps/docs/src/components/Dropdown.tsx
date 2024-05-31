import { Button, Icon } from 'actify'

import NavLink from './NavLink'
import React from 'react'

interface DropdownProps extends React.ComponentProps<'div'> {
  items?: Array<{
    href: string
    text?: string
  }>
}
const Dropdown = (props: DropdownProps) => {
  const { title, items } = props

  return (
    <div className="relative">
      <Button variant="text" className="group peer px-2.5">
        {title}
        <div className="flex items-center transition-transform duration-300 group-hover:rotate-90">
          <Icon className="[--md-icon-size:20px]">keyboard_arrow_down</Icon>
        </div>
      </Button>

      <div className="absolute hidden w-28 flex-col bg-surface drop-shadow-lg hover:flex peer-hover:flex">
        {items?.map((item, index) => (
          <NavLink
            key={index}
            href={item.href}
            className="block px-4 py-2 text-sm hover:bg-surface-variant"
          >
            {item.text}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
