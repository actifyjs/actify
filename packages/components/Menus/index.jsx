import React, {
  forwardRef,
  useState,
  useRef,
  useContext,
  useEffect
} from 'react'
import { Icon, Button } from 'actify'
import { MenuContext } from './MenuContext'

import {
  flip,
  shift,
  offset,
  useRole,
  useClick,
  useHover,
  useDismiss,
  autoUpdate,
  safePolygon,
  useFloating,
  useListItem,
  FloatingList,
  FloatingNode,
  useMergeRefs,
  useTypeahead,
  FloatingPortal,
  useInteractions,
  useFloatingTree,
  useListNavigation,
  useFloatingNodeId,
  FloatingFocusManager,
  useFloatingParentNodeId
} from '@floating-ui/react'

const Menu = forwardRef((props, ref) => {
  const { children, label, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [hasFocusInside, setHasFocusInside] = useState(false)

  const elementsRef = useRef([])
  const labelsRef = useRef([])
  const parent = useContext(MenuContext)

  const tree = useFloatingTree()
  const nodeId = useFloatingNodeId()
  const parentId = useFloatingParentNodeId()
  const item = useListItem()

  const isNested = parentId != null

  const { floatingStyles, refs, context } = useFloating({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [
      offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift()
    ],
    whileElementsMounted: autoUpdate
  })

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true })
  })
  const click = useClick(context, {
    event: 'mousedown',
    toggle: !isNested,
    ignoreMouse: isNested
  })
  const role = useRole(context, { role: 'menu' })
  const dismiss = useDismiss(context, { bubbles: true })
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead]
  )

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    if (!tree) return
    function handleTreeClick() {
      setIsOpen(false)
    }
    function onSubMenuOpen(event) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false)
      }
    }
    tree.events.on('click', handleTreeClick)
    tree.events.on('menuopen', onSubMenuOpen)
    return () => {
      tree.events.off('click', handleTreeClick)
      tree.events.off('menuopen', onSubMenuOpen)
    }
  }, [tree, nodeId, parentId])

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId })
    }
  }, [tree, isOpen, nodeId, parentId])

  const Tag = isNested ? 'ul' : Button
  return (
    <FloatingNode id={nodeId}>
      <Tag
        ref={useMergeRefs([refs.setReference, item.ref, ref])}
        tabIndex={
          !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
        }
        role={isNested ? 'menuitem' : undefined}
        data-open={isOpen ? '' : undefined}
        data-nested={isNested ? '' : undefined}
        data-focus-inside={hasFocusInside ? '' : undefined}
        className={
          isNested
            ? 'MenuItem cursor-pointer flex items-center gap-1 hover:bg-surface p-1 rounded-md'
            : 'Menu'
        }
        {...getReferenceProps(
          parent.getItemProps({
            ...rest,
            onFocus(event) {
              rest.onFocus?.(event)
              setHasFocusInside(false)
              parent.setHasFocusInside(true)
            }
          })
        )}
      >
        {label}
        {isNested && <Icon name="chevron-down" size={18} />}
      </Tag>
      <MenuContext.Provider
        value={{
          activeIndex,
          setActiveIndex,
          getItemProps,
          setHasFocusInside,
          isOpen
        }}
      >
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={isNested ? -1 : 0}
                returnFocus={!isNested}
              >
                <div
                  ref={refs.setFloating}
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  <div className="p-2 text-on-secondary bg-secondary rounded-md flex flex-col gap-2">
                    {children}
                  </div>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </MenuContext.Provider>
    </FloatingNode>
  )
})

Menu.displayName = 'Actify.Menu'

export { Menu }
