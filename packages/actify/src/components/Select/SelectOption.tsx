import { MdSelectOption } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const SelectOptionWebComponent = createComponent({
  react: React,
  tagName: 'md-select-option',
  elementClass: MdSelectOption
})

type SelectOptionType = {
  variant?: 'filled' | 'outlined'
  children?: React.ReactNode
} & React.ComponentProps<typeof SelectOptionWebComponent>

const SelectOption = ({ ...rest }: SelectOptionType) => {
  return <SelectOptionWebComponent {...rest} />
}

export { SelectOption }
