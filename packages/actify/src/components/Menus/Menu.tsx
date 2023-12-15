'use client'

import {
  flip,
  shift,
  offset,
  useRole,
  useHover,
  useClick,
  useDismiss,
  autoUpdate,
  useListItem,
  useFloating,
  safePolygon,
  useMergeRefs,
  useTypeahead,
  FloatingTree,
  FloatingNode,
  FloatingList,
  FloatingPortal,
  useInteractions,
  useFloatingTree,
  useListNavigation,
  useFloatingNodeId,
  FloatingFocusManager,
  useFloatingParentNodeId
} from '@floating-ui/react'

import React, {
  useContext,
  forwardRef,
  useState,
  useRef,
  useEffect
} from 'react'
import { Button } from '@actify/Button'
import { List } from '@actify/Lists'
import { ChevronDown } from 'lucide-react'
import { ListItem } from '@actify/Lists/ListItem'
import { tv } from 'tailwind-variants'
import { MenuContext } from './MenuContext'

const rootVariants = tv({
  base: ''
})

const listVariants = tv({
  base: 'flex flex-col rounded border border-outline/50 bg-surface bg-clip-padding p-1 shadow-lg outline-none backdrop-blur-lg'
})

interface MenuProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label?: string
}

export const MenuComponent = forwardRef<HTMLLIElement, MenuProps>(
  ({ children, className, label, ...props }, forwardedRef) => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasFocusInside, setHasFocusInside] = useState(false)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
        offset({
          mainAxis: isNested ? 0 : 4,
          alignmentAxis: isNested ? -4 : 0
        }),
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

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([hover, click, role, dismiss, listNavigation, typeahead])

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    useEffect(() => {
      if (!tree) return

      function handleTreeClick() {
        setIsOpen(false)
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
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

    return (
      <FloatingNode id={nodeId}>
        {isNested ? (
          <ListItem
            role="menuitem"
            className="pr-4 focus-visible:outline-none justify-between"
            ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
            {...getReferenceProps(
              // @ts-expect-error
              parent.getItemProps({
                ...props,
                onFocus(event: React.FocusEvent<HTMLLIElement>) {
                  props.onFocus?.(event)
                  setHasFocusInside(false)
                  parent.setHasFocusInside(true)
                }
              })
            )}
          >
            {label}
            <div
              className={`ml-2.5 flex items-center transition-transform duration-300 ${
                isOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              <ChevronDown />
            </div>
          </ListItem>
        ) : (
          <Button
            data-open={isOpen ? '' : undefined}
            data-nested={isNested ? '' : undefined}
            role={isNested ? 'menuitem' : undefined}
            data-focus-inside={hasFocusInside ? '' : undefined}
            className={rootVariants({ className })}
            // @ts-expect-error
            ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
            {...getReferenceProps(
              // @ts-expect-error
              parent.getItemProps({
                ...props,
                onFocus(event: React.FocusEvent<HTMLLIElement>) {
                  props.onFocus?.(event)
                  setHasFocusInside(false)
                  parent.setHasFocusInside(true)
                }
              })
            )}
          >
            {label}
            <div
              className={`flex items-center transition-transform duration-300 ${
                isOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              <ChevronDown size={20} />
            </div>
          </Button>
        )}
        <MenuContext.Provider
          value={{
            isOpen,
            activeIndex,
            // @ts-expect-error
            getItemProps,
            setActiveIndex,
            setHasFocusInside
          }}
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  modal={false}
                  context={context}
                  returnFocus={!isNested}
                  initialFocus={isNested ? -1 : 0}
                >
                  <List
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className={listVariants({ className })}
                  >
                    {children}
                  </List>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </FloatingList>
        </MenuContext.Provider>
      </FloatingNode>
    )
  }
)

const Menu = forwardRef<HTMLLIElement, MenuProps>((props, ref) => {
  const parentId = useFloatingParentNodeId()

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} ref={ref} />
      </FloatingTree>
    )
  }

  return <MenuComponent {...props} ref={ref} />
})

Menu.displayName = 'Actify.Menu'

export default Menu
