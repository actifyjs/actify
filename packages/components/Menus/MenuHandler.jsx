import MenuContext from './MenuContext'
import React, { forwardRef, useContext, useState } from 'react'
import {
  autoUpdate,
  flip,
  shift,
  offset,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useMergeRefs
} from '@floating-ui/react'

const MenuHandler = forwardRef((props, ref) => {
  const { children, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)
  const menu = useContext(MenuContext)

  const nodeId = useFloatingNodeId()
  const parentId = useFloatingParentNodeId()
  const isNested = parentId != null

  const { refs } = useFloating({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }), flip(), shift()],
    whileElementsMounted: autoUpdate
  })

  return (
    <div
      ref={useMergeRefs([refs.setReference, item.ref, ref])}
      tabIndex={!isNested ? undefined : menu.activeIndex === item.index ? 0 : -1}
      role={isNested ? 'menuitem' : undefined}
      data-open={isOpen ? '' : undefined}
      data-nested={isNested ? '' : undefined}
      data-focus-inside={hasFocusInside ? '' : undefined}
      className={isNested ? 'MenuItem' : 'Menu'}
      {...getReferenceProps(
        menu.getItemProps({
          ...rest,
          onFocus(event) {
            rest.onFocus?.(event)
            setHasFocusInside(false)
            menu.setHasFocusInside(true)
          }
        })
      )}
    >
      {children}
    </div>
  )
})

MenuHandler.displayName = 'Actify.MenuHandler'

export default MenuHandler
