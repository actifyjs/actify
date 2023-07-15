import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdFocusRing } from '@material/web/focus/focus-ring'

const FocusRing = createComponent({
  react: React,
  tagName: 'md-focus-ring',
  elementClass: MdFocusRing
})

export default FocusRing
