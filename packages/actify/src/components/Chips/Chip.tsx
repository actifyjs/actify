'use client'
import ChipItem from './ChipItem'
import { ChipProvider, ChipProps } from './ChipContext'

const Chip = (props: ChipProps) => {
  const { children, ...rest } = props

  return <ChipProvider {...rest}>{children}</ChipProvider>
}

Chip.displayName = 'Actify.Chip'

export default Object.assign(Chip, {
  Item: ChipItem
})
