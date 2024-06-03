import React from 'react'
import styles from './actify.module.css'

interface CompProps {
  as: keyof JSX.IntrinsicElements
}
const VisuallyHidden: React.FC<
  CompProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ as: Tag = 'span', ...rest }) => {
  return <Tag className={styles['visually-hidden']} {...rest} />
}

export { VisuallyHidden }
