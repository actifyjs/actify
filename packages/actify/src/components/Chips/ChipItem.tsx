'use client'

import { AssitChip } from './AssistChip'
import { FilterChip } from './FilterChip'
import { InputChip } from './InputChip'
import React from 'react'
import { SuggestionChip } from './SuggestionChip'

export interface ChipProps extends React.ComponentProps<'div'> {
  index?: number
  href?: string
  label?: string
  elevated?: boolean
  disabled?: boolean
  removable?: boolean
  removeOnly?: boolean
  target?: React.HTMLAttributeAnchorTarget
  type?: 'assit' | 'filter' | 'input' | 'suggestion'
}

const ChipItem = (props: ChipProps) => {
  const { type = 'assit', ...rest } = props

  return (
    <React.Fragment>
      {type == 'assit' && <AssitChip {...rest} />}
      {type == 'filter' && <FilterChip {...rest} />}
      {type == 'input' && <InputChip {...rest} />}
      {type == 'suggestion' && <SuggestionChip {...rest} />}
    </React.Fragment>
  )
}

export { ChipItem }
