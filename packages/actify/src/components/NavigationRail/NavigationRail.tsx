'use client'

import { Badge } from '../Badges'
import { Icon } from '../Icon'
import React from 'react'
import { Ripple } from '../Ripple'
import clsx from 'clsx'
import styles from './navigation-rail.module.css'
import { useControllableState } from '../../hooks'

interface Item extends React.ComponentProps<'button'> {
  label: string
  icon: React.ReactNode
  badge?: number | string
  isActive?: boolean
}

interface NavigationRailProps extends React.ComponentProps<'div'> {
  items: Item[]
  menu?: React.ReactNode
  value?: number
  defaultValue?: number
  setValue?: (index: number) => void
}

const Item = (props: Item) => {
  const { icon, label, badge, isActive, ...rest } = props

  return (
    <button
      {...rest}
      className={clsx(styles['item'], isActive && styles['active'])}
    >
      <Ripple />
      <Badge value={badge}>
        {typeof icon == 'string' ? <Icon>{icon}</Icon> : icon}
      </Badge>
      <label className={styles['label']}>{label}</label>
    </button>
  )
}

const NavigationRail = (props: NavigationRailProps) => {
  const { value, defaultValue, setValue } = props
  const [activeIndex, setActiveIndex] = useControllableState({
    value,
    defaultValue,
    onChange: setValue
  })

  const { children, className, menu, items = [], ...rest } = props
  return (
    <div {...rest} className={clsx(styles['root'], className)}>
      {/* Menu icon (optional) */}
      {menu}
      {/* Navigation Items */}
      <nav className={styles['items']}>
        {items.map((item, index) => {
          const { icon, label, badge } = item
          const isActive = index == activeIndex
          return (
            <Item
              key={index}
              icon={icon}
              label={label}
              badge={badge}
              isActive={isActive}
              onClick={() => setActiveIndex(index)}
            />
          )
        })}
      </nav>
    </div>
  )
}

NavigationRail.displayName = 'Actify.NavigationRail'

export { NavigationRail }
