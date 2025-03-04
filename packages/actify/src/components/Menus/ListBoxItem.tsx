'use client'

import {
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps
} from 'react-aria-components'

import { FocusRing } from '../FocusRing'
import { Ripple } from '../Ripple'
import clsx from 'clsx'
import styles from './listbox-item.module.css'

const ListBoxItem = ({ style, className, ...props }: ListBoxItemProps) => {
  return (
    <AriaListBoxItem
      {...props}
      style={style}
      className={clsx(styles['item'], className)}
    >
      <>{props.children}</>
      <FocusRing className={styles['focus-ring']} type="inward" />
      <Ripple />
    </AriaListBoxItem>
  )
}

export { ListBoxItem }
