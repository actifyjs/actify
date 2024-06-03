'use client'

import React from 'react'
import clsx from 'clsx'
import elevation from './elevation.module.css'

interface ElevationProps extends React.ComponentProps<'span'> {
  disabled?: boolean
}

const Elevation = ({ disabled = false }: ElevationProps) => {
  return (
    <span
      aria-hidden="true"
      className={clsx(elevation['shadow'], disabled && elevation['disabled'])}
    />
  )
}

Elevation.displayName = 'Actify.Elevation'

export { Elevation }
