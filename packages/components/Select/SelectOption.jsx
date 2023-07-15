import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdSelectOption } from '@material/web/select/select-option'

const SelectOption = createComponent({
  react: React,
  tagName: 'md-select-option',
  elementClass: MdSelectOption,
  displayName: 'Actify.SelectOption'
})

export default SelectOption
