import { ListItem } from 'actify'
import React, { useContext, forwardRef } from 'react'
import { useListItem, useFloatingTree, useMergeRefs } from '@floating-ui/react'
import { tv } from 'tailwind-variants'
import { MenuContext } from './MenuContext'

const variants = tv({
  base: 'pr-4 focus-visible:outline-none justify-between',
  variants: {
    disabled: {
      true: 'text-gray-400 cursor-not-allowed'
    }
  }
})

const MenuItem = forwardRef(({ label, disabled, ...props }, forwardedRef) => {
  const menu = useContext(MenuContext)
  const item = useListItem({ label: disabled ? null : label })
  const tree = useFloatingTree()
  const isActive = item.index === menu.activeIndex

  return (
    <ListItem
      {...props}
      type="button"
      role="menuitem"
      disabled={disabled}
      className={variants({ disabled })}
      tabIndex={isActive ? 0 : -1}
      ref={useMergeRefs([item.ref, forwardedRef])}
      {...menu.getItemProps({
        onClick(event) {
          props.onClick?.(event)
          tree?.events.emit('click')
        },
        onFocus(event) {
          props.onFocus?.(event)
          menu.setHasFocusInside(true)
        }
      })}
    >
      {label}
    </ListItem>
  )
})

export { MenuItem }
