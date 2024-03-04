'use client'
import AssitChip from './AssistChip'
import FilterChip from './FilterChip'
import SuggestionChip from './SuggestionChip'
import React, { forwardRef } from 'react'

export interface ChipProps extends React.ComponentPropsWithRef<'div'> {
  href?: string
  label?: string
  elevated?: boolean
  disabled?: boolean
  target?: React.HTMLAttributeAnchorTarget
  type?: 'assit' | 'filter' | 'input' | 'suggestion'
}

const ChipItem = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { type = 'assit', ...rest } = props

  return (
    <>
      {type == 'assit' && <AssitChip {...rest} ref={ref} />}
      {type == 'filter' && <FilterChip {...rest} ref={ref} />}
      {type == 'suggestion' && <SuggestionChip {...rest} ref={ref} />}
    </>
  )
})

export default ChipItem
