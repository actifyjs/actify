'use client'

import { createContext, useId } from 'react'

import { LayoutGroup } from 'framer-motion'
import { Placement } from 'react-aria'

export const TooltipGroupContext = createContext<{
  placement?: Placement
  groupId?: string
}>({
  placement: 'top',
  groupId: undefined
})

interface TooltipGroupProps {
  placement?: Placement
  children?: React.ReactNode
}

const TooltipGroup = (props: TooltipGroupProps) => {
  const groupId = useId()
  const { children, placement } = props

  return (
    <TooltipGroupContext value={{ groupId, placement }}>
      <LayoutGroup>{children}</LayoutGroup>
    </TooltipGroupContext>
  )
}

export { TooltipGroup }
