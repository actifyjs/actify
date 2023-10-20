import React from 'react'
import { Icon, IconButton } from 'actify'
import { useToastDispatchContext } from './ToastContext'

const Toast = ({ type, message, id }) => {
  const dispatch = useToastDispatchContext()

  return (
    <>
      {type == 'success' && (
        <div className="rounded bg-green-50 py-3 px-4 m-3">
          <div className="flex">
            <div className="flex-shrink-0">
              <Icon name="check-circle-2" className="text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <IconButton
                  onClick={() => {
                    dispatch({ id, type: 'DELETE_TOAST' })
                  }}
                  className="text-green-500"
                >
                  <span className="sr-only">Dismiss</span>
                  <Icon name="x-circle" />
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
              <Icon name="x-circle" className="text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <IconButton
                  onClick={() => {
                    dispatch({ id, type: 'DELETE_TOAST' })
                  }}
                  className="text-red-500"
                >
                  <span className="sr-only">Dismiss</span>
                  <Icon name="x-circle" />
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
