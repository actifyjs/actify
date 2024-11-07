'use client'

import { Divider } from './../Divider'
import React from 'react'
import clsx from 'clsx'
import styles from './side-sheets.module.css'
import { useSideSheets } from './SideSheetsContext'

const SideSheetsBody = (props: React.ComponentProps<'div'>) => {
  const { divider } = useSideSheets()
  const { className, children } = props

  return (
    <React.Fragment>
      {divider && <Divider />}
      <div className={clsx(styles['body'], className)}>{children}</div>
      {divider && <Divider />}
    </React.Fragment>
  )
}

export { SideSheetsBody }
