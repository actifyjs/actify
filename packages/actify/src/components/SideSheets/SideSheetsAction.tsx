import React from 'react'
import styles from './side-sheets.module.css'

const SideSheetsAction = ({ children }: React.ComponentProps<'div'>) => {
  return <div className={styles['action']}>{children}</div>
}

export { SideSheetsAction }
