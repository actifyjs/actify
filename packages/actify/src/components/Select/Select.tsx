import { FilledSelect } from './FilledSelect'
import { OutlinedSelect } from './OutlinedSelect'
import React from 'react'

type SelectProps = {
  variant?: 'filled' | 'outlined'
  children?: React.ReactNode
} & React.ComponentProps<typeof FilledSelect> &
  React.ComponentProps<typeof OutlinedSelect>

const Select = (props: SelectProps) => {
  const { variant = 'filled', ...rest } = props

  if (variant == 'outlined') {
    return <OutlinedSelect {...rest} />
  }

  return <FilledSelect {...rest} />
}

export { Select }
