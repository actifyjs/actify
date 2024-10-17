'use client'

import {
  AriaTabListProps,
  mergeProps,
  useFocusRing,
  useTabList
} from 'react-aria'
import React, { useEffect, useState } from 'react'
import { TabListProps, useTabListState } from 'react-stately'

import { Tab } from './Tab'
import { TabPanel } from './TabPanel'
import clsx from 'clsx'
import styles from './tabs.module.css'

interface TabsProps<T> extends AriaTabListProps<T>, TabListProps<T> {
  style?: React.CSSProperties
  className?: string
}

const Tabs = <T extends object>(props: TabsProps<T>) => {
  const state = useTabListState(props)
  const ref = React.useRef<HTMLDivElement>(null)
  const { tabListProps } = useTabList(props, state, ref)

  const [activeTabStyle, setActiveTabStyle] = useState({
    width: 0,
    transform: 'translateX(0)'
  })

  useEffect(() => {
    const activeTab = ref?.current?.querySelector(
      '[role="tab"][aria-selected="true"]'
    ) as HTMLDivElement
    setActiveTabStyle({
      width: activeTab?.offsetWidth,
      transform: `translateX(${activeTab?.offsetLeft}px)`
    })
  }, [state.selectedKey])

  const { focusProps, isFocusVisible } = useFocusRing({
    within: true
  })

  return (
    <nav style={props.style} className={clsx(styles['tabs'], props.className)}>
      <div className={styles['tab']}>
        <div
          style={{ ...activeTabStyle }}
          className={clsx(styles['tab-selection'], isFocusVisible && 'focused')}
        />
        <div
          ref={ref}
          className={styles['tab-list']}
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
