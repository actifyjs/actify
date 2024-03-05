'use client'
import ChipItem from './ChipItem'
import { ChipProvider, ChipProps } from './ChipContext'
import { Children, isValidElement, cloneElement } from 'react'

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
