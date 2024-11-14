import { OverlayTriggerState } from 'react-stately'
import React from 'react'

type PopoverContextType = {
  state: OverlayTriggerState
  referenceWidth?: number
}

export const PopoverContext: React.Context<PopoverContextType> =
  React.createContext<PopoverContextType>({
    state: {} as OverlayTriggerState
  })
