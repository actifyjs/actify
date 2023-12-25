'use client'
import { ListItem } from '@actify/Lists/ListItem'
import React, { useContext, forwardRef } from 'react'
import { useListItem, useFloatingTree, useMergeRefs } from '@floating-ui/react'
import { tv } from 'tailwind-variants'
import { MenuContext } from './MenuContext'

const variants = tv({
  base: 'pr-4 focus-visible:outline-none items-center',
  variants: {
    disabled: {
      true: 'text-gray-400 cursor-not-allowed'
    }
  }
})

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label: string
  disabled?: boolean
  type?: 'button' | 'submit'
  description?: string
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ label, disabled, description, trailing, leading, ...props }, forwardedRef) => {
    const menu = useContext(MenuContext)
    const item = useListItem({ label: disabled ? null : label })
    const tree = useFloatingTree()
    const isActive = item.index === menu.activeIndex

    return (
      <ListItem
        {...props}
        role="menuitem"
        className={variants({ disabled })}
        tabIndex={isActive ? 0 : -1}
        ref={useMergeRefs([item.ref, forwardedRef])}
        // @ts-expect-error
        {...menu.getItemProps({
          onClick(event: React.MouseEvent<HTMLLIElement>) {
            props.onClick?.(event)
            tree?.events.emit('click')
          },
          onFocus(event: React.FocusEvent<HTMLLIElement>) {
            props.onFocus?.(event)
            menu.setHasFocusInside(true)
          }
        })}
      >
        {leading}
        <div className={"flex-1" + (leading !== undefined ? " ml-4" : "") + (trailing !== undefined ? " mr-4" : "")}>
          <p className={'text-on-surface' + (description && " mb-1/2")}>{label}</p>
          {description && <p className='text-sm text-on-surface-variant'>{description}</p>}
        </div>
        {trailing}
      </ListItem>
    )
  }
)

export { MenuItem }
