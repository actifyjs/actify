import { AriaButtonProps, Placement, useMenuTrigger } from 'react-aria'
import type { AriaMenuProps, MenuTriggerProps } from '@react-types/menu'

import { Button } from './../Buttons'
import { Menu } from './Menu'
import { Popover } from './../Popover'
import React from 'react'
import { useMenuTriggerState } from 'react-stately'

interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  style?: React.CSSProperties
  className?: string
  label?: string
  placement?: Placement
  activator?: (
    ref: React.RefObject<null>,
    menuTriggerProps: AriaButtonProps<'button'>
  ) => React.JSX.Element
}

const ActionMenu = <T extends object>(props: MenuButtonProps<T>) => {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props)

  // Get props for the menu trigger and menu elements
  const ref = React.useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref)

  return (
    <>
      {props.label && (
        <Button {...menuTriggerProps} ref={ref}>
          {props.label}
        </Button>
      )}
      {props?.activator?.(ref, menuTriggerProps)}
      {state.isOpen && (
        <Popover state={state} triggerRef={ref}>
          <Menu
            {...props}
            {...menuProps}
            autoFocus={state.focusStrategy || true}
            onClose={() => state.close()}
          />
        </Popover>
      )}
    </>
  )
}

export { ActionMenu }
