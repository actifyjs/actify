'use client'
import React from 'react'
import { type ToastProps } from './Toast'
import { createContext, useReducer, useContext } from 'react'

type ToastState = {
  toasts: ToastProps[]
}

export type ToastAction = {
  id: string
  toast: ToastProps
  type: 'ADD_TOAST' | 'DELETE_TOAST'
}

const ToastStateContext = createContext<ToastState>({} as ToastState)
const ToastDispatchContext = createContext<React.Dispatch<ToastAction>>(
  {} as React.Dispatch<ToastAction>
)

const ToastReducer = (state: ToastState, action: ToastAction) => {
  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast]
      }
    }
    case 'DELETE_TOAST': {
      const updatedToasts = state.toasts?.filter((e) => e.id != action.id)
      return {
        ...state,
        toasts: updatedToasts
      }
    }
    default: {
      throw new Error('unhandled action')
    }
  }
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ToastReducer, { toasts: [] })

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  )
}

export const useToastStateContext = () => useContext(ToastStateContext)
export const useToastDispatchContext = () => useContext(ToastDispatchContext)
