'use client'

import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps
} from 'react-aria-components'

import React from 'react'
import clsx from 'clsx'
import styles from './outlined-field.module.css'

interface ButtonProps extends AriaButtonProps {
  ref?: React.RefObject<HTMLButtonElement | null>
}

const OutlinedField = (props: ButtonProps) => {
  const { ref, children } = props

  return (
    <div className={styles['outlined-field']}>
      {/* trigger button */}
      <AriaButton ref={ref} {...props} className={styles['trigger-button']}>
        <>{children}</>
      </AriaButton>
      {/* outline */}
      <span className={clsx(styles['outline'])} />
    </div>
  )
}

export { OutlinedField }
