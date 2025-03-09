'use client'

import { MenuProps, MenuTrigger, MenuTriggerProps } from 'react-aria-components'

import { Button } from '../Buttons'
import { Menu } from './Menu'
import { MenuPopover, PopoverProps } from './MenuPopover'
import React from 'react'

export interface MenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, 'children'> {
  label?: React.ReactNode;
  popoverProps?: Omit<PopoverProps, 'children'>;
}

const MenuButton = <T extends object>({
  label,
  children,
  popoverProps,
  ...props
}: MenuButtonProps<T>) => {
  return (
    <MenuTrigger {...props}>
      {typeof label == 'string' ? <Button>{label}</Button> : label}
      <MenuPopover {...popoverProps}>
        <Menu>{children}</Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}

export { MenuButton }
