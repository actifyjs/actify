'use client'

import { Divider } from './../Divider'
import React from 'react'
import { tv } from 'tailwind-variants'
import { useSideSheets } from './SideSheetsContext'

const root = tv({
  base: [
    'pt-6',
    'pl-6',
    'flex',
    'flex-col',
    'min-h-[120px]',
    'overflow-y-auto',
    'h-[calc(100vh-176px)]'
  ]
})

const Body = (props: React.ComponentProps<'div'>) => {
  const { divider } = useSideSheets()
  const { className, children } = props

  return (
    <React.Fragment>
      {divider && <Divider />}
      <div className={root({ className })}>{children}</div>
      {divider && <Divider />}
    </React.Fragment>
  )
}

export { Body }
