import { MdDivider } from '@material/web/all'
import React from 'react'
import { createComponent } from '@lit/react'

const Divider = createComponent({
  react: React,
  tagName: 'md-divider',
  elementClass: MdDivider
})

export { Divider }
