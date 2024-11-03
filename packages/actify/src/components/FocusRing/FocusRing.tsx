import { CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './focusring.module.css'

type FocusRingProps = {
  style?: CSSProperties
  className?: string
  as?: keyof HTMLElementTagNameMap
}

const FocusRing = ({ as = 'span', style, className }: FocusRingProps) => {
  const Tag = as
  return <Tag style={style} className={clsx(styles['focus-ring'], className)} />
}

FocusRing.displayName = 'Actify.FocusRing'

export { FocusRing }
