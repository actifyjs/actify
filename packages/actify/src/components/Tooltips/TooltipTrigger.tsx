'use client'

import { ReactNode, createContext, useRef } from 'react'
import {
  TooltipTriggerProps,
  TooltipTriggerState,
  useTooltipTriggerState
} from 'react-stately'

import { FocusableElement } from '@react-types/shared'
import { FocusableProvider } from '@react-aria/focus'
import { Provider } from './../../utils'
import { TooltipContext } from './Tooltip'
import { useTooltipTrigger } from 'react-aria'

export interface TooltipTriggerComponentProps extends TooltipTriggerProps {
  children: ReactNode
}

export const TooltipTriggerStateContext =
  createContext<TooltipTriggerState | null>(null)

/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */
export function TooltipTrigger(props: TooltipTriggerComponentProps) {
  const state = useTooltipTriggerState(props)
  const ref = useRef<FocusableElement>(null)
  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref)

  return (
    <Provider
      values={[
        [TooltipTriggerStateContext, state],
        [TooltipContext, { ...tooltipProps, triggerRef: ref }]
      ]}
    >
      <FocusableProvider {...triggerProps} ref={ref}>
        {props.children}
      </FocusableProvider>
    </Provider>
  )
}
