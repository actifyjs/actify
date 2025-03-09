import {
  AriaFocusRingProps,
  AriaOptionProps,
  mergeProps,
  useFocusRing,
  useOption
} from 'react-aria'
import { ListState, Node } from 'react-stately'

import { FocusRing } from '../FocusRing'
import React from 'react'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './option.module.css'

interface OptionProps<T> extends AriaOptionProps, AriaFocusRingProps {
  item: Node<T>
  state: ListState<T>
}

const ListBoxOption = <T extends object>({
  item,
  state,
  ...props
}: OptionProps<T>) => {
  const ref = React.useRef(null)
  const { focusProps, isFocusVisible } = useFocusRing(props)
  const { optionProps, isSelected } = useOption({ key: item.key }, state, ref)

  return (
    <li
      ref={ref}
      {...mergeProps(focusProps, optionProps)}
      className={clsx(styles['item'], isSelected && styles['selected'])}
    >
      {item.rendered}
      {isFocusVisible && (
        <FocusRing
          type="inward"
          style={
            {
              color: 'rgb(var(--md-sys-color-primary))',
              '--md-focus-ring-shape': "8px"
            } as React.CSSProperties
          }
        />
      )}
      <Ripple />
    </li>
  )
}

export { ListBoxOption }
