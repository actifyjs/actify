'use client'

import { Children, cloneElement, isValidElement } from 'react'
import { ChipProps, ChipProvider } from './ChipContext'

import { ChipItem } from './ChipItem'

const Chip = (props: ChipProps) => {
  const { children, ...rest } = props
  return (
    <ChipProvider {...rest}>
      {Children.map(
        children,
        (child, index) =>
          isValidElement(child) &&
          cloneElement(child, {
            index,
            // @ts-ignore
            ...child.props
          })
      )}
    </ChipProvider>
  )
}

Chip.displayName = 'Actify.Chip'

export default Object.assign(Chip, {
  Item: ChipItem
})
