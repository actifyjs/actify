'use client'
import React from 'react'
import { tv } from 'tailwind-variants'
import { useSideSheets } from './Context'
import { Divider } from '@actify/Divider'

const variants = tv({
  base: 'pl-6 pt-6 h-[calc(100vh-176px)] min-h-[120px] flex flex-col overflow-y-auto'
})

const Body: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  // @ts-ignore
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
