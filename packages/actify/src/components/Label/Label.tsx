'use client'

import React from 'react'

interface LabelProps extends React.ComponentProps<'label'> {}
const Label = ({ ref, children, ...rest }: LabelProps) => {
  return (
    <label
      ref={ref}
      {...rest}
      onMouseDown={(event) => {
        // only prevent text selection if clicking inside the label itself
        const target = event.target as HTMLElement
        if (target.closest('button, input, select, textarea')) return

        rest.onMouseDown?.(event)
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
