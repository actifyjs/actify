'use client'

import { Menu as AriaMenu, MenuProps } from 'react-aria-components'

import styles from './menu.module.css'

const Menu = <T extends object>(props: MenuProps<T>) => {
  return <AriaMenu {...props} className={styles['menu']} />
}

export { Menu }
