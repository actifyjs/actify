'use client'

import { Icon } from './../Icon'
import { IconButton } from './../Buttons'
import React from 'react'
import clsx from 'clsx'
import styles from './side-sheets.module.css'
import { useSideSheets } from './SideSheetsContext'

const SideSheetsHeader = ({
  className,
  children
}: React.ComponentProps<'div'>) => {
  const { setOpen } = useSideSheets()

  return (
    <div className={styles['header']}>
      <div className={clsx(styles['header-inner'], className)}>{children}</div>
      <IconButton onClick={() => setOpen?.(false)}>
        <Icon>close</Icon>
      </IconButton>
    </div>
  )
}

export { SideSheetsHeader }
