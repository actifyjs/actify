import { CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './focusring.module.css'

type FocusRingProps = {
  style?: CSSProperties
  className?: string
  type?: 'outward' | 'inward'
  as?: keyof HTMLElementTagNameMap | React.ElementType
}

const FocusRing = ({ as: As = 'span', type = 'outward', style, className }: FocusRingProps) => {
  return <As style={style} className={clsx(styles['focus-ring'], className)} inward={type === 'inward' ? 'true' : undefined}/>
}

FocusRing.displayName = 'Actify.FocusRing'

export { FocusRing }
