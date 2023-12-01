'use client'

import {
  flip,
  arrow,
  shift,
  offset,
  useRole,
  useFocus,
  useHover,
  useDismiss,
  autoUpdate,
  useFloating,
  FloatingArrow,
  useDelayGroup,
  FloatingPortal,
  useInteractions,
  FloatingDelayGroup,
  useDelayGroupContext
} from '@floating-ui/react'

import React, {
  useId,
  useRef,
  useState,
  useContext,
  cloneElement,
  createContext,
  useLayoutEffect
} from 'react'

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

const TooltipGroupContext = createContext({
  placement: 'top',
  groupId: undefined
})

const TooltipGroup = ({
  timeout = 300,
  showDelay = 500,
  hideDelay = 200,
  placement,
  children
}) => {
  const groupId = useId()

  return (
    <TooltipGroupContext.Provider value={{ groupId, placement }}>
      <FloatingDelayGroup
        timeoutMs={timeout}
        delay={{ open: showDelay, close: hideDelay }}
      >
        <LayoutGroup>{children}</LayoutGroup>
      </FloatingDelayGroup>
    </TooltipGroupContext.Provider>
  )
}

const Tooltip = ({
  content,
  showDelay,
  hideDelay,
  placement,
  showArrow = true,
  children
}) => {
  const { placement: groupPlacement, groupId } = useContext(TooltipGroupContext)
  const { delay, isInstantPhase } = useDelayGroupContext()
  const showDelayFinal =
    showDelay || (typeof delay === 'number' ? delay : delay.open) || 500
  const hideDelayFinal =
    hideDelay || (typeof delay === 'number' ? delay : delay.close) || 200
  const placementFinal = placement || groupPlacement
  const [open, setOpen] = useState(false)

  // unmounted -> initial -> positioned -> unmounted
  const [state, setState] = useState('unmounted')

  const arrowRef = useRef(null)

  const {
    x,
    y,
    refs,
    context,
    strategy,
    isPositioned,
    placement: computedPlacement
  } = useFloating({
    placement: placementFinal,
    open,
    onOpenChange(open) {
      setOpen(open)
      if (open) {
        // We need additional check because onOpenChange will be triggered when we switch between tooltip elements
        if (state === 'unmounted') setState('initial')
      }
    },
    middleware: [
      offset(5),
      flip(),
      shift({ padding: 8 }),
      arrow({
        element: arrowRef
      })
    ],
    whileElementsMounted: autoUpdate
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: showDelayFinal, restMs: hideDelayFinal }),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context)
  ])

  const tooltipId = useId()
  useDelayGroup(context, { id: tooltipId })

  useLayoutEffect(() => {
    if (isPositioned && state !== 'positioned') {
      setState('positioned')
    }
  }, [isPositioned])

  const translate = {
    top: { translateY: 5 },
    left: { translateX: 5 },
    right: { translateX: -5 },
    bottom: { translateY: -5 }
  }[
    computedPlacement.includes('-')
      ? computedPlacement.split('-')[0]
      : computedPlacement
  ]

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: refs.setReference, ...children.props })
      )}
      <FloatingPortal>
        {/* This element used to measure its size for position calculation, and later we render true tooltip */}
        {open && state === 'initial' && (
          <div
            {...getFloatingProps({
              ref: refs.setFloating,
              className:
                'bg-inverse-surface py-3 px-4 rounded max-w-xs grid grid-cols-[1fr_auto] items-center gap-2',
              style: {
                top: 0,
                left: 0,
                position: strategy,
                visibility: 'hidden'
              }
            })}
          >
            {content}
          </div>
        )}
        <AnimatePresence
          onExitComplete={() => {
            setState('unmounted')
          }}
        >
          {open && state === 'positioned' && (
            <motion.div
              initial={
                // @ts-ignore
                isInstantPhase ? {} : { sacle: 0, opacity: 0, ...translate }
              }
              animate={{ scale: 1, opacity: 1, translateX: 0, translateY: 0 }}
              exit={{ scale: 0, opacity: 0, ...translate }}
              transition={{ duration: 0.2 }}
              layoutId={groupId}
              {...getFloatingProps({
                ref: refs.setFloating,
                className:
                  'z-50 bg-inverse-surface py-3 px-4 rounded max-w-xs grid grid-cols-[1fr_auto] items-center gap-2',
                style: {
                  top: y ?? 0,
                  left: x ?? 0,
                  position: strategy
                }
              })}
            >
              {content}
              {showArrow && (
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  className="fill-inverse-surface"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  )
}

export default Tooltip
export { TooltipGroup }
