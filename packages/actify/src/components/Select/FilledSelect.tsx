import { MdFilledSelect } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const FilledSelect = createComponent({
  react: React,
  tagName: 'md-filled-select',
  elementClass: MdFilledSelect
})

export { FilledSelect }
