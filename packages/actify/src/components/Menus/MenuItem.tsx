'use client'

import { MenuItem as AriaMenuItem, MenuItemProps } from 'react-aria-components'
import { mergeProps, useFocusRing } from 'react-aria'

import { FocusRing } from './../FocusRing'
import { Icon } from './../Icon'
import { Item } from './../Item'
import { Ripple } from './../Ripple'
import styles from './menu.module.css'

const Container = () => (
  <div className={styles['container']}>
    <Ripple />
    <FocusRing />
  </div>
)

const MenuItem = (props: MenuItemProps) => {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined)

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <AriaMenuItem
      {...mergeProps(props, focusProps)}
      className={styles['menu-item']}
      textValue={textValue}
    >
      {({ hasSubmenu }) => (
        <>
          <Item container={<Container />}>
            <>
              {props.children}
              {hasSubmenu && <Icon>Chevron_Right</Icon>}
            </>
          </Item>
          {isFocusVisible && (
            <FocusRing
              type="inward"
              style={
                {
                  color: 'var(--md-sys-color-primary)',
                  '--md-focus-ring-shape': '8px'
                } as React.CSSProperties
              }
            />
          )}
        </>
      )}
    </AriaMenuItem>
  )
}

export { MenuItem }
