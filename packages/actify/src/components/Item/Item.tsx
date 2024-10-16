import React from 'react'
import styles from './item.module.css'

export interface ItemProps extends React.ComponentProps<'div'> {
  container?: React.ReactNode
  start?: React.ReactNode
  overline?: React.ReactNode
  headline?: React.ReactNode
  supportingText?: React.ReactNode
  trailingSupportingText?: React.ReactNode
  end?: React.ReactNode
}
const Item = (props: ItemProps) => {
  const {
    container,
    start,
    overline,
    headline,
    supportingText,
    trailingSupportingText,
    end,
    children,
    ...rest
  } = props
  return (
    <div {...rest} className={styles['item']}>
      {container}
      {start}
      {end}
      {children}
      {overline}
      {headline}
      {supportingText}
      {trailingSupportingText}
    </div>
  )
}

Item.displayName = 'Actify.Item'

export { Item }
