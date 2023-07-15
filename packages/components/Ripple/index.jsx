import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdRipple } from '@material/web/ripple/ripple'

const Ripple = createComponent({
  react: React,
  tagName: 'md-ripple',
  elementClass: MdRipple,
  displayName: 'Actify.Ripple'
})

export default Ripple
