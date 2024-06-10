'use client'

import React from 'react'
import clsx from 'clsx'
import elevation from './elevation.module.css'

interface ElevationProps
  extends Omit<React.ComponentProps<'span'>, 'children'> {
  disabled?: boolean
}

const Elevation = ({ disabled = false, ...rest }: ElevationProps) => {
  const classes = clsx(elevation['shadow'], disabled && elevation['disabled'])
  return <span {...rest} aria-hidden="true" className={classes} />
}

Elevation.displayName = 'Actify.Elevation'

export { Elevation }
