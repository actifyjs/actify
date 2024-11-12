import { VisuallyHiddenProps, useVisuallyHidden } from 'react-aria'

import React from 'react'
import styles from './visually-hidden.module.css'

interface Props extends VisuallyHiddenProps {
  as?: keyof HTMLElementTagNameMap | React.ElementType
}
const VisuallyHidden = ({ as: Tag = 'span', ...props }: Props) => {
  const { visuallyHiddenProps } = useVisuallyHidden(props)

  return <Tag className={styles['visually-hidden']} {...visuallyHiddenProps} />
}

export { VisuallyHidden }
