import { MdOutlinedSelect } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const OutlinedSelect = createComponent({
  react: React,
  tagName: 'md-outlined-select',
  elementClass: MdOutlinedSelect
})

export { OutlinedSelect }
