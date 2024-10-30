import { AriaOptionProps, useOption } from 'react-aria'
import { ListState, Node } from 'react-stately'

import React from 'react'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './option.module.css'

interface OptionProps<T> extends AriaOptionProps {
  item: Node<T>
  state: ListState<T>
}

const Option = <T extends object>({ item, state }: OptionProps<T>) => {
  const ref = React.useRef(null)
  const { optionProps, isSelected } = useOption({ key: item.key }, state, ref)

  return (
    <li
      ref={ref}
      {...optionProps}
      className={clsx(styles['item'], isSelected && styles['selected'])}
    >
      {item.rendered}
      <Ripple />
    </li>
  )
}

export { Option }
