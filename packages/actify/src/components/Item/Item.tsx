import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from '../Ripple'

type ItemProps = {
  id: HTMLElement['id']
  multiline?: boolean
  overline?: React.ReactNode
  headline?: React.ReactNode
  children?: React.ReactNode
  supportingText?: React.ReactNode
  start?: React.ReactNode
  end?: React.ReactNode
  trailingSupportingText?: React.ReactNode
}

const Item = ({
  id,
  overline,
  headline,
  supportingText,
  multiline = false,
  start,
  end,
  trailingSupportingText,
  children
}: ItemProps) => {
  return (
    <React.Fragment>
      {/* slot container */}
      <slot name="container">
        <Ripple id={id} aria-hidden="true" />
        <FocusRing id={id} aria-hidden="true" />
      </slot>
      <slot className="non-text" name="start">
        {start}
      </slot>
      <div className="text">
        {overline}
        {children}
        {headline}
        {supportingText}
      </div>
      <slot className="non-text">{trailingSupportingText}</slot>
      <slot className="non-text">{end}</slot>
    </React.Fragment>
  )
}

export { Item }
