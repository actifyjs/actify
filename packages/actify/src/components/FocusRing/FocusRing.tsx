'use client'
import { tv } from 'tailwind-variants'
import { useAttachable } from '@hooks/index'
import { EASING } from '@animations/index'
import React, { useState, useRef, useEffect } from 'react'

const root = tv({
  base: [
    'absolute',
    'pointer-events-none',
    'text-[var(--md-focus-ring-color,rgb(var(--color-secondary)))]',
    '[animation-delay:0s,calc(var(--md-focus-ring-duration,600ms)*.25)]',
    '[animation-duration:calc(var(--md-focus-ring-duration,600ms)*.25),calc(var(--md-focus-ring-duration,600ms)*.75)]',
    `[animation-timing-function:${EASING.STANDARD}]`,
    '[animation-name:outward-grow,outward-shrink]',
    'inset-[calc(-1*var(--md-focus-ring-outward-offset,2px))]',
    '[outline:var(--md-focus-ring-width,3px)_solid_currentColor]',
    '[border-end-end-radius:calc(var(--md-focus-ring-shape-end-end,var(--md-focus-ring-shape,9999px))_+_var(--md-focus-ring-outward-offset,2px))]',
    '[border-end-start-radius:calc(var(--md-focus-ring-shape-end-start,var(--md-focus-ring-shape,9999px))_+_var(--md-focus-ring-outward-offset,2px))]',
    '[border-start-end-radius:calc(var(--md-focus-ring-shape-start-end,var(--md-focus-ring-shape,9999px))_+_var(--md-focus-ring-outward-offset,2px))]',
    '[border-start-start-radius:calc(var(--md-focus-ring-shape-start-start,var(--md-focus-ring-shape,9999px))_+_var(--md-focus-ring-outward-offset,2px))]'
  ],
  variants: {
    visible: {
      true: 'flex',
      false: 'hidden'
    }
  }
})

const EVENTS = ['focusin', 'focusout', 'pointerdown']
interface FocusRingProps extends React.ComponentProps<'label'> {}

const FocusRing = (props: FocusRingProps) => {
  const { id, className, ...rest } = props
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const control = useAttachable(ref)

  useEffect(() => {
    if (control) {
      for (const event of EVENTS) {
        control.addEventListener(event, () => {
          switch (event) {
            default:
              return
            case 'focusin':
              const visible = control?.matches(':focus-visible') ?? false
              setVisible(visible)
              break
            case 'focusout':
            case 'pointerdown':
              setVisible(false)
              break
          }
        })
      }
    }
  }, [ref.current])

  return (
    <>
      <style>
        {`
        @keyframes outward-grow {
          from {
            outline-width: 0
          }
          to {
            outline-width: var(--md-focus-ring-active-width, 8px)
          }
        }
        @keyframes outward-shrink {
          from {
            outline-width: var(--md-focus-ring-active-width, 8px)
          }
        }
        @keyframes inward-grow {
          from {
            border-width: 0
          }
          to {
            border-width: var(--md-focus-ring-active-width, 8px)
          }
        }
        @keyframes inward-shrink {
          from {
            border-width: var(--md-focus-ring-active-width, 8px)
          }
        }           
      `}
      </style>
      <label
        ref={ref}
        {...rest}
        htmlFor={id}
        aria-hidden="true"
        className={root({
          visible,
          className
        })}
      ></label>
    </>
  )
}

FocusRing.displayName = 'Actify.FocusRing'

export default FocusRing
