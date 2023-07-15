import React from 'react'
import { createComponent } from '@lit-labs/react'
import { MdCircularProgress } from '@material/web/circularprogress/circular-progress'

const CircularProgress = createComponent({
  react: React,
  tagName: 'md-circular-progress',
  elementClass: MdCircularProgress,
  displayName: 'Actify.CircularProgress'
})

export default CircularProgress
