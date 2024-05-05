'use client'
import React from 'react'
import { XCircle, CheckCircle2 } from 'lucide-react'
import { IconButton } from './../Button/IconButton'
import { useToastDispatchContext, ToastAction } from './ToastContext'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  message: string
  type: 'success' | 'error'
}

const Toast: React.FC<ToastProps> = ({ type, message, id }) => {
  const dispatch = useToastDispatchContext()

  return (
    <>
      {type == 'success' && (
        <div className="rounded bg-green-50 py-3 px-4 m-3">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle2 className="text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <IconButton
                  onClick={() => {
                    dispatch({ id, type: 'DELETE_TOAST' } as ToastAction)
                  }}
                  className="text-green-500"
                >
                  <span className="sr-only">Dismiss</span>
                  <XCircle />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
      {type == 'error' && (
        <div className="rounded bg-red-50 py-3 px-4 m-3">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircle className="text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <IconButton
                  onClick={() => {
                    dispatch({ id, type: 'DELETE_TOAST' } as ToastAction)
                  }}
                  className="text-red-500"
                >
                  <span className="sr-only">Dismiss</span>
                  <XCircle />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { Toast }
