'use client'

import { MenuProps, MenuTrigger, MenuTriggerProps } from 'react-aria-components'

import { Button } from '../Buttons'
import { Menu } from './Menu'
import { MenuPopover } from './MenuPopover'

export interface MenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, 'children'> {
  label?: string
}

const MenuButton = <T extends object>({
  label,
  children,
  ...props
}: MenuButtonProps<T>) => {
  return (
    <MenuTrigger {...props}>
      <Button>{label}</Button>
      <MenuPopover>
        <Menu {...props}>{children}</Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}

export { MenuButton }
