import React from 'react'
import { ToastRegion } from './ToastRegion'
import type { ToastState } from '@react-stately/toast'
import { useToastState } from '@react-stately/toast'

interface ToastProviderProps<T> {
  maxVisibleToasts?: number
  children: (state: ToastState<T>) => React.ReactNode
}

const ToastProvider = <T extends React.ReactNode>({
  children,
  maxVisibleToasts = 5,
  ...props
}: ToastProviderProps<T>) => {
  const state = useToastState<T>({
    maxVisibleToasts
  })

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && (
        <ToastRegion {...props} state={state} />
      )}
    </>
  )
}

export { ToastProvider }
