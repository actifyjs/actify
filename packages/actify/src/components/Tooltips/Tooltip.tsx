'use client'

import {
  AriaPositionProps,
  OverlayContainer,
  Placement,
  PlacementAxis,
  PositionProps
} from 'react-aria'
import {
  ContextValue,
  RenderProps,
  useContextProps,
  useExitAnimation
} from '../../utils'
import {
  OverlayTriggerProps,
  TooltipTriggerState,
  useTooltipTriggerState
} from 'react-stately'
import { RefObject, createContext, useContext } from 'react'

import { AriaLabelingProps } from '@react-types/shared'
import { TooltipGroupContext } from './TooltipGroup'
import { TooltipInner } from './TooltipInner'
import { TooltipTrigger } from 'react-aria-components'
import { TooltipTriggerStateContext } from './TooltipTrigger'

export interface TooltipRenderProps {
  /**
   * The placement of the tooltip relative to the trigger.
   * @selector [data-placement="left | right | top | bottom"]
   */
  placement: PlacementAxis | null
  /**
   * Whether the tooltip is currently entering. Use this to apply animations.
   * @selector [data-entering]
   */
  isEntering: boolean
  /**
   * Whether the tooltip is currently exiting. Use this to apply animations.
   * @selector [data-exiting]
   */
  isExiting: boolean
  /**
   * State of the tooltip.
   */
  state: TooltipTriggerState
}
export const TooltipContext =
  createContext<ContextValue<TooltipProps, HTMLDivElement>>(null)
export interface TooltipProps
  extends PositionProps,
    Pick<AriaPositionProps, 'arrowBoundaryOffset'>,
    OverlayTriggerProps,
    AriaLabelingProps,
    RenderProps<TooltipRenderProps> {
  /**
   * The ref for the element which the tooltip positions itself with respect to.
   *
   * When used within a TooltipTrigger this is set automatically. It is only required when used standalone.
   */
  triggerRef?: RefObject<Element | null>
  /**
   * Whether the tooltip is currently performing an entry animation.
   */
  isEntering?: boolean
  /**
   * Whether the tooltip is currently performing an exit animation.
   */
  isExiting?: boolean
  /**
   * The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
   * @default document.body
   */
  UNSTABLE_portalContainer?: Element
  /**
   * The placement of the tooltip with respect to the trigger.
   * @default 'top'
   */
  placement?: Placement
  ref?: RefObject<HTMLDivElement | null>
}

const Tooltip = ({ UNSTABLE_portalContainer, ref, ...props }: TooltipProps) => {
  const { placement } = useContext(TooltipGroupContext)
  props.placement = props.placement ?? placement
  ;[props, ref] = useContextProps(
    props,
    ref as RefObject<HTMLDivElement | null>,
    TooltipContext
  )
  const contextState = useContext(TooltipTriggerStateContext)
  const localState = useTooltipTriggerState(props)
  const state =
    props.isOpen != null || props.defaultOpen != null || !contextState
      ? localState
      : contextState
  const isExiting =
    useExitAnimation(ref, state.isOpen) || props.isExiting || false
  if (!state.isOpen && !isExiting) {
    return null
  }

  return (
    <TooltipTrigger>
      <OverlayContainer portalContainer={UNSTABLE_portalContainer}>
        <TooltipInner {...props} tooltipRef={ref} isExiting={isExiting} />
      </OverlayContainer>
    </TooltipTrigger>
  )
}

Tooltip.displayName = 'Actify.Tooltip'
export { Tooltip }
