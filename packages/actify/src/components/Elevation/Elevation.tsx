'use client'

import './elevation.css'

import React from 'react'
import clsx from 'clsx'

interface ElevationProps extends React.ComponentProps<'span'> {
  disabled?: boolean
}

const Elevation = ({ disabled = false }: ElevationProps) => {
  const classes = clsx('a-elevation', disabled && 'a-elevation-disabled')

  return <span aria-hidden="true" className={classes} />
}

Elevation.displayName = 'Actify.Elevation'

export { Elevation }
