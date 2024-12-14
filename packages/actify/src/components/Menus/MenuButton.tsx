'use client'

import { MenuProps, MenuTrigger, MenuTriggerProps } from 'react-aria-components'

import { Button } from '../Buttons'
import { Menu } from './Menu'
import { MenuPopover } from './MenuPopover'
import React from 'react'

export interface MenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, 'children'> {
  label?: React.ReactNode
}

const MenuButton = <T extends object>({
  label,
  children,
  ...props
}: MenuButtonProps<T>) => {
  return (
    <MenuTrigger {...props}>
      {typeof label == 'string' ? <Button>{label}</Button> : label}
      <MenuPopover>
        <Menu>{children}</Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}

export { MenuButton }
