import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdLinearProgress } from '@material/web/linearprogress/linear-progress'

const LinearProgress = createComponent({
  react: React,
  tagName: 'md-linear-progress',
  elementClass: MdLinearProgress,
  displayName: 'Actify.LinearProgress'
})

export default LinearProgress
