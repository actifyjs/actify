import styles from './popover.module.css'

import { motion } from 'motion/react'
import {
  DismissButton,
  Overlay,
  usePopover,
  type AriaPopoverProps
} from 'react-aria'

import type {
  OverlayTriggerProps,
  PlacementAxis,
  PositionProps
} from '@react-types/overlays'

import React from 'react'
import { RenderProps, SlotProps } from './../../utils'
import { OverlayTriggerState } from 'react-stately'

interface PopoverRenderProps {
  /**
   * The name of the component that triggered the popover, e.g. "DialogTrigger" or "ComboBox".
   * @selector [data-trigger="..."]
   */
  trigger: string | null
  /**
   * The placement of the popover relative to the trigger.
   * @selector [data-placement="left | right | top | bottom"]
   */
  placement: PlacementAxis
  /**
   * Whether the popover is currently entering. Use this to apply animations.
   * @selector [data-entering]
   */
  isEntering: boolean
  /**
   * Whether the popover is currently exiting. Use this to apply animations.
   * @selector [data-exiting]
   */
  isExiting: boolean
}

export interface PopoverProps
  extends PositionProps,
    Omit<AriaPopoverProps, 'triggerRef' | 'popoverRef'>,
    OverlayTriggerProps,
    RenderProps<PopoverRenderProps>,
    SlotProps {
  triggerRef?: React.RefObject<Element | null>
  popoverRef?: React.RefObject<Element | null>

  state: OverlayTriggerState
  referenceWidth?: number
}

const Popover = (props: PopoverProps & React.RefAttributes<HTMLElement>) => {
  const _triggerRef = React.useRef<HTMLDivElement>(null)
  const _popoverRef = React.useRef<HTMLDivElement>(null)

  const {
    state,
    children,
    referenceWidth,
    triggerRef = _triggerRef,
    popoverRef = _popoverRef
  } = props

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      triggerRef,
      popoverRef
    },
    state
  )

  // make the width of the popover the same as the reference element
  if (referenceWidth) {
    popoverProps.style = {
      ...popoverProps.style,
      '--reference-width': referenceWidth + 'px'
    } as React.CSSProperties
  }

  // apply a class that enables scrolling if necessary
  const onAnimationComplete = React.useCallback(() => {
    popoverRef.current?.classList.add(styles['open']);
  }, [popoverRef])

  return (
    <Overlay>
      <div {...underlayProps} className={styles['underlay']} />
      {/* @ts-expect-error */}
      <motion.div
        {...popoverProps}
        className={styles['popover']}
        initial={{
          height: 0,
          overflow: 'hidden'
        }}
        onAnimationComplete={onAnimationComplete}
        animate={{
          height: 'auto'
        }}
        transition={{
          duration: 0.3
        }}
        ref={popoverRef as React.RefObject<HTMLDivElement>}
      >
        <DismissButton onDismiss={state.close} />
        <>{children}</>
        <DismissButton onDismiss={state.close} />
      </motion.div>
    </Overlay>
  )
}

export { Popover }
