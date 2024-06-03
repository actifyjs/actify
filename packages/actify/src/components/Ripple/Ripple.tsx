'use client'

import React, { useEffect, useId, useRef, useState } from 'react'

import { EASING } from './../../animations'
import clsx from 'clsx'
import styles from './actify.module.css'
import { useAttachable } from './../../hooks'

const TOUCH_DELAY_MS = 150
const PRESS_GROW_MS = 450
const MINIMUM_PRESS_MS = 225
const INITIAL_ORIGIN_SCALE = 0.2
const PADDING = 10
const SOFT_EDGE_MINIMUM_SIZE = 75
const SOFT_EDGE_CONTAINER_RATIO = 0.35
const PRESS_PSEUDO = '::after'
const ANIMATION_FILL = 'forwards'

enum State {
  /**
   * Initial state of the control, no touch in progress.
   *
   * Transitions:
   *   - on touch down: transition to `TOUCH_DELAY`.
   *   - on mouse down: transition to `WAITING_FOR_CLICK`.
   */
  INACTIVE,
  /**
   * Touch down has been received, waiting to determine if it's a swipe or
   * scroll.
   *
   * Transitions:
   *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
   *   - on cancel: transition to `INACTIVE`.
   *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
   */
  TOUCH_DELAY,
  /**
   * A touch has been deemed to be a press
   *
   * Transitions:
   *  - on up: transition to `WAITING_FOR_CLICK`.
   */
  HOLDING,
  /**
   * The user touch has finished, transition into rest state.
   *
   * Transitions:
   *   - on click end press; transition to `INACTIVE`.
   */
  WAITING_FOR_CLICK
}

const EVENTS = [
  'click',
  'contextmenu',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointerup'
]

interface RippleProps extends React.ComponentProps<'label'> {
  disabled?: boolean
}

const Ripple = (props: RippleProps) => {
  const { id, disabled = false, style, className } = props
  const rippleId = id || `$actify-ripple{useId()}`

  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const ref = useRef<HTMLLabelElement>(null)
  const control = useAttachable(ref)
  const state = useRef(State.INACTIVE)
  const rippleSize = useRef('')
  const rippleScale = useRef('')
  const initialSize = useRef(0)
  const growAnimation = useRef<Animation>()
  const rippleStartEvent = useRef<PointerEvent>()
  const checkBoundsAfterContextMenu = useRef(false)

  const isTouch = ({ pointerType }: PointerEvent) => {
    return pointerType === 'touch'
  }

  const inBounds = ({ x, y }: PointerEvent) => {
    const { top, left, bottom, right } = ref.current!.getBoundingClientRect()
    return x >= left && x <= right && y >= top && y <= bottom
  }

  const determineRippleSize = () => {
    const { height, width } = ref.current!.getBoundingClientRect()
    const maxDim = Math.max(height, width)
    const softEdgeSize = Math.max(
      SOFT_EDGE_CONTAINER_RATIO * maxDim,
      SOFT_EDGE_MINIMUM_SIZE
    )

    const _initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE)

    const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
    const maxRadius = hypotenuse + PADDING

    initialSize.current = _initialSize
    rippleScale.current = `${(maxRadius + softEdgeSize) / _initialSize}`
    rippleSize.current = `${initialSize.current}px`
  }

  const getNormalizedPointerEventCoords = (
    pointerEvent: PointerEvent
  ): {
    x: number
    y: number
  } => {
    const { scrollX, scrollY } = window
    const { left, top } = ref.current!.getBoundingClientRect()
    const documentX = scrollX + left
    const documentY = scrollY + top
    const { pageX, pageY } = pointerEvent
    return { x: pageX - documentX, y: pageY - documentY }
  }

  const getTranslationCoordinates = (positionEvent?: Event) => {
    const { height, width } = ref.current!.getBoundingClientRect()
    // end in the center
    const endPoint = {
      x: (width - initialSize.current) / 2,
      y: (height - initialSize.current) / 2
    }

    let startPoint
    if (positionEvent instanceof PointerEvent) {
      startPoint = getNormalizedPointerEventCoords(positionEvent)
    } else {
      startPoint = {
        x: width / 2,
        y: height / 2
      }
    }

    // center around start point
    startPoint = {
      x: startPoint.x - initialSize.current / 2,
      y: startPoint.y - initialSize.current / 2
    }

    return { startPoint, endPoint }
  }

  const startPressAnimation = (positionEvent?: Event) => {
    if (!ref.current) {
      return
    }
    setPressed(true)
    growAnimation.current?.cancel()
    determineRippleSize()
    const { startPoint, endPoint } = getTranslationCoordinates(positionEvent)
    const translateStart = `${startPoint.x}px, ${startPoint.y}px`
    const translateEnd = `${endPoint.x}px, ${endPoint.y}px`

    growAnimation.current = ref.current?.animate(
      {
        top: [0, 0],
        left: [0, 0],
        height: [rippleSize.current, rippleSize.current],
        width: [rippleSize.current, rippleSize.current],
        transform: [
          `translate(${translateStart}) scale(1)`,
          `translate(${translateEnd}) scale(${rippleScale.current})`
        ]
      },
      {
        pseudoElement: PRESS_PSEUDO,
        duration: PRESS_GROW_MS,
        easing: EASING.STANDARD,
        fill: ANIMATION_FILL
      }
    )
  }

  const endPressAnimation = async () => {
    rippleStartEvent.current = undefined
    state.current = State.INACTIVE
    const animation = growAnimation.current
    let pressAnimationPlayState = Infinity
    if (typeof animation?.currentTime === 'number') {
      pressAnimationPlayState = animation.currentTime
    } else if (animation?.currentTime) {
      pressAnimationPlayState = animation.currentTime.to('ms').value
    }
    if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
      setPressed(false)
      return
    }
    await new Promise((_) =>
      setTimeout(_, MINIMUM_PRESS_MS - pressAnimationPlayState)
    )
    if (growAnimation.current !== animation) {
      // A new press animation was started. The old animation was canceled and
      // should not finish the pressed state.
      return
    }
    setPressed(false)
  }

  const shouldReactToEvent = (event: PointerEvent) => {
    if (disabled || !event.isPrimary) {
      return false
    }
    if (
      rippleStartEvent.current &&
      rippleStartEvent.current.pointerId !== event.pointerId
    ) {
      return false
    }
    if (event.type === 'pointerenter' || event.type === 'pointerleave') {
      return !isTouch(event)
    }
    const isPrimaryButton = event.buttons === 1
    return isTouch(event) || isPrimaryButton
  }

  const handleClick = () => {
    if (state.current === State.WAITING_FOR_CLICK) {
      endPressAnimation()
      return
    }
    if (state.current === State.INACTIVE) {
      // keyboard synthesized click event
      startPressAnimation()
      endPressAnimation()
    }
  }

  const handleContextmenu = () => {
    if (disabled) {
      return
    }
    checkBoundsAfterContextMenu.current = true
    endPressAnimation()
  }

  const handlePointercancel = (event: PointerEvent) => {
    if (!shouldReactToEvent(event)) {
      return
    }
    endPressAnimation()
  }

  const handlePointerdown = async (event: PointerEvent) => {
    if (!shouldReactToEvent(event)) {
      return
    }
    rippleStartEvent.current = event
    if (!isTouch(event)) {
      state.current = State.WAITING_FOR_CLICK
      startPressAnimation(event)
      return
    }
    // after a longpress contextmenu event, an extra `pointerdown` can be
    // dispatched to the pressed element. Check that the down is within
    // bounds of the element in this case.
    if (checkBoundsAfterContextMenu.current && !inBounds(event)) {
      return
    }
    checkBoundsAfterContextMenu.current = false

    // Wait for a hold after touch delay
    state.current = State.TOUCH_DELAY
    await new Promise((resolve) => {
      setTimeout(resolve, TOUCH_DELAY_MS)
    })
    if (state.current !== State.TOUCH_DELAY) {
      return
    }
    state.current = State.HOLDING
    startPressAnimation(event)
  }

  const handlePointerenter = (event: PointerEvent) => {
    if (!shouldReactToEvent(event)) {
      return
    }
    setHovered(true)
  }

  const handlePointerleave = (event: PointerEvent) => {
    if (!shouldReactToEvent(event)) {
      return
    }
    setHovered(false)
    // release a held mouse or pen press that moves outside the element
    if (state.current !== State.INACTIVE) {
      endPressAnimation()
    }
  }

  const handlePointerup = (event: PointerEvent) => {
    if (!shouldReactToEvent(event)) {
      return
    }
    if (state.current === State.HOLDING) {
      state.current = State.WAITING_FOR_CLICK
      return
    }
    if (state.current === State.TOUCH_DELAY) {
      state.current = State.WAITING_FOR_CLICK
      startPressAnimation(rippleStartEvent.current)
      return
    }
  }

  useEffect(() => {
    if (control) {
      for (const e of EVENTS) {
        control.addEventListener(e, async (event) => {
          switch (event.type) {
            case 'click':
              handleClick()
              break
            case 'contextmenu':
              handleContextmenu()
              break
            case 'pointercancel':
              handlePointercancel(event as PointerEvent)
              break
            case 'pointerdown':
              await handlePointerdown(event as PointerEvent)
              break
            case 'pointerenter':
              handlePointerenter(event as PointerEvent)
              break
            case 'pointerleave':
              handlePointerleave(event as PointerEvent)
              break
            case 'pointerup':
              handlePointerup(event as PointerEvent)
              break
            default:
              break
          }
        })
      }
    }
  }, [ref.current])

  return (
    <label
      ref={ref}
      style={style}
      htmlFor={rippleId}
      aria-hidden="true"
      className={clsx(
        styles['ripple'],
        hovered && styles['hoverd'],
        pressed && styles['pressed'],
        className
      )}
    />
  )
}

Ripple.displayName = 'Actify.Ripple'

export { Ripple }
