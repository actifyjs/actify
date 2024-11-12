'use client'

import { LabelAriaProps } from 'react-aria'
import React from 'react'

interface LabelProps extends LabelAriaProps, React.ComponentProps<'label'> {
  children?: React.ReactNode
}

const Label = ({ ref, children, ...props }: LabelProps) => {
  return (
    <label
      ref={ref}
      {...props}
      onMouseDown={(event) => {
        // only prevent text selection if clicking inside the label itself
        const target = event.target as HTMLElement
        if (target.closest('button, input, select, textarea')) return

        props.onMouseDown?.(event)
        // prevent text selection when double clicking label
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault()
      }}
    >
      {children}
    </label>
  )
}

Label.displayName = 'Actify.Label'

export { Label }
