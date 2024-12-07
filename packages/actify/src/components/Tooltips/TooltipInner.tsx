'use client'

import { RefObject, useContext, useLayoutEffect, useRef, useState } from 'react'
import { mergeProps, useOverlayPosition, useTooltip } from 'react-aria'
import { useEnterAnimation, useRenderProps } from '../../utils'

import { OverlayArrowContext } from './OverlayArrow'
import { TooltipProps } from './Tooltip'
import { TooltipTriggerStateContext } from './TooltipTrigger'

const TooltipInner = (
  props: TooltipProps & {
    isExiting: boolean
    tooltipRef: RefObject<HTMLDivElement | null>
  }
) => {
  const state = useContext(TooltipTriggerStateContext)!

  // Calculate the arrow size internally
  // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
  const arrowRef = useRef<HTMLDivElement>(null)
  const [arrowWidth, setArrowWidth] = useState(0)
  useLayoutEffect(() => {
    if (arrowRef.current && state.isOpen) {
      setArrowWidth(arrowRef.current.getBoundingClientRect().width)
    }
  }, [state.isOpen, arrowRef])

  const { overlayProps, arrowProps, placement } = useOverlayPosition({
    placement: props.placement || 'top',
    targetRef: props.triggerRef!,
    overlayRef: props.tooltipRef,
    offset: props.offset,
    crossOffset: props.crossOffset,
    isOpen: state.isOpen,
    arrowSize: arrowWidth,
    arrowBoundaryOffset: props.arrowBoundaryOffset,
    shouldFlip: props.shouldFlip,
    onClose: () => state.close(true)
  })

  const isEntering =
    useEnterAnimation(props.tooltipRef, !!placement) ||
    props.isEntering ||
    false
  const renderProps = useRenderProps({
    ...props,
    defaultClassName: 'react-aria-Tooltip',
    values: {
      placement,
      isEntering,
      isExiting: props.isExiting,
      state
    }
  })

  props = mergeProps(props, overlayProps)
  const { tooltipProps } = useTooltip(props, state)

  return (
    <div
      {...renderProps}
      {...tooltipProps}
      ref={props.tooltipRef}
      data-placement={placement ?? undefined}
      data-entering={isEntering || undefined}
      data-exiting={props.isExiting || undefined}
      style={{ ...overlayProps.style, ...renderProps.style }}
    >
      <OverlayArrowContext
        value={{ ...arrowProps, placement, ref: arrowRef }}
      >
        {renderProps.children}
      </OverlayArrowContext>
    </div>
  )
}

export { TooltipInner }
