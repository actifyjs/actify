'use client'

import { ListBox as AriaListBox, ListBoxProps } from 'react-aria-components'

import styles from './listbox.module.css'

const ListBox = <T extends object>({ children, ...props }: ListBoxProps<T>) => {
  return (
    <AriaListBox {...props} className={styles['items']}>
      {children}
    </AriaListBox>
  )
}

export { ListBox }
