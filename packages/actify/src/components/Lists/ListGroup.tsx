'use client'

import React, {
  Children,
  cloneElement,
  isValidElement,
  useContext,
  useState
} from 'react'

import { Icon } from './../Icon'
import { ListContext } from './ListContext'
import clsx from 'clsx'
import { motion } from 'motion/react'
import styles from './list-group.module.css'

interface ListItemProps extends React.ComponentProps<'li'> {
  label?: string
  icon?: React.ReactNode
}

const ListGroup = (props: ListItemProps) => {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { className, label, icon, children, ...rest } = props

  const { layoutId } = useContext(ListContext)

  return (
    <li {...rest} className={clsx(styles['root'], className)}>
      <div
        className={styles['item']}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={() => setOpen(!open)}
      >
        {icon}
        {label}
        <div className={clsx(styles['icon'], open && styles['icon-open'])}>
          <Icon>keyboard_arrow_down</Icon>
        </div>
      </div>
      {hovered && (
        <motion.div
          layoutId={layoutId}
          // @ts-ignore
          className={styles['hovered']}
        />
      )}
      <div className={clsx(styles['content'], open && styles['content-open'])}>
        <ul
          style={{
            overflow: 'hidden'
          }}
        >
          {Children.map(
            children,
            (child) =>
              isValidElement(child) &&
              cloneElement(child, {
                // @ts-ignore
                ...child.props
              })
          )}
        </ul>
      </div>
    </li>
  )
}

ListGroup.displayName = 'Actify.ListGroup'

export { ListGroup }
