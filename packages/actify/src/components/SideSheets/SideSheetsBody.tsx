'use client'
import React from 'react'
import { tv } from 'tailwind-variants'
import { Divider } from '@actify/Divider'
import { useSideSheets } from './SideSheetsContext'

const variants = tv({
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

const Body: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { divider } = useSideSheets()
  const { className, children } = props

  return (
    <>
      {divider && <Divider />}
      <div className={variants({ className })}>{children}</div>
      {divider && <Divider />}
    </>
  )
}

export { Body }
