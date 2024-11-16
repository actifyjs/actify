'use client'

import {
  AriaTabListProps,
  mergeProps,
  useFocusRing,
  useTabList
} from 'react-aria'
import React, { useEffect, useState } from 'react'
import { TabListProps, useTabListState } from 'react-stately'

import { StyleProps } from '../../utils'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'
import clsx from 'clsx'
import styles from './tabs.module.css'

interface TabsProps<T>
  extends AriaTabListProps<T>,
    TabListProps<T>,
    StyleProps {}

const Tabs = <T extends object>(props: TabsProps<T>) => {
  const state = useTabListState(props)
  const ref = React.useRef<HTMLDivElement>(null)
  const { tabListProps } = useTabList(props, state, ref)

  const { orientation = 'horizontal' } = props

  const [activeTabStyle, setActiveTabStyle] = useState<{
    width?: number
    height?: number
    transform: string
  }>({
    width: 0,
    height: 0,
    transform: 'translateX(0)'
  })

  useEffect(() => {
    const activeTab = ref?.current?.querySelector(
      '[role="tab"][aria-selected="true"]'
    ) as HTMLDivElement

    setActiveTabStyle({
      ...(orientation === 'vertical'
        ? {
            height: activeTab?.offsetHeight,
            transform: `translateY(${activeTab?.offsetTop}px)`
          }
        : {
            width: activeTab?.offsetWidth,
            transform: `translateX(${activeTab?.offsetLeft}px)`
          })
    })
  }, [state.selectedKey, orientation])

  const { focusProps, isFocusVisible } = useFocusRing({
    within: true
  })

  return (
    <nav
      style={props.style}
      className={clsx(
        styles['tabs'],
        orientation === 'vertical' && styles['tabs-vertical'],
        props.className
      )}
    >
      <div className={styles['tab']}>
        <div
          style={{ ...activeTabStyle }}
          className={clsx(
            styles['tab-selection'],
            styles[`tab-selection-${orientation}`],
            isFocusVisible && 'focused'
          )}
        />
        <div
          ref={ref}
          className={clsx(
            styles['tab-list'],
            orientation === 'vertical' && styles['tab-list-vertical']
          )}
          {...mergeProps(tabListProps, focusProps)}
        >
          {[...state.collection].map((item) => (
            <Tab key={item.key} item={item} state={state} />
          ))}
        </div>
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </nav>
  )
}

Tabs.displayName = 'Actify.Tabs'

export { Tabs }
