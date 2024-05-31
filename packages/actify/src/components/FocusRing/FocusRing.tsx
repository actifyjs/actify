'use client'

import './focus-ring.css'

import React from 'react'
import { useAttachable } from './../../hooks'

const EVENTS = ['focusin', 'focusout', 'pointerdown']
interface FocusRingProps extends React.ComponentProps<'label'> {}

const FocusRing = (props: FocusRingProps) => {
  const ref = React.useRef<HTMLLabelElement>(null)
  const { id, style } = props
  const control = useAttachable(ref)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
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
    <label
      ref={ref}
      htmlFor={id}
      aria-hidden="true"
      style={{
        ...style,
        display: visible ? 'flex' : 'none'
      }}
      className="a-focus-ring"
    />
  )
}

FocusRing.displayName = 'Actify.FocusRing'

export { FocusRing }
