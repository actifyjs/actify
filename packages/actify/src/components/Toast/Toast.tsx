'use client'
import React, { useEffect } from 'react'
import { XCircle, CheckCircle2 } from 'lucide-react'
import { IconButton } from '@actify/Button/IconButton'
import {
  useToastDispatchContext,
  ToastAction,
  useToastStateContext
} from './ToastContext'
import './animate.css'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  message: string
  type: 'success' | 'error'
}

function useToastAnimate(
  shouldShow: boolean,
  callback: () => void,
  delay: number = 300
) {
  const [show, setShow] = React.useState(shouldShow)
  const [aniType, setAniType] = React.useState(
    shouldShow ? 'toast-entry' : 'toast-leave'
  )
  const timer = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (shouldShow) {
      setShow(true)
      setAniType('toast-entry')
    } else {
      setAniType('toast-leave')
      timer.current = setTimeout(() => {
        setShow(false)
        callback()
      }, delay)
    }

    return () => {
      clearTimeout(timer.current!)
    }
  }, [shouldShow, delay])
  return {
    show,
    aniType
  }
}

const toastMap = new Map([
  [
    'success',
    {
      icon: <CheckCircle2 className="text-green-400" />,
      messageClass: 'text-green-800',
      btnClass: 'text-red-500'
    }
  ],
  [
    'error',
    {
      icon: <XCircle className="text-red-400" />,
      messageClass: 'text-red-800',
      btnClass: 'text-green-500'
    }
  ]
])

const Toast: React.FC<ToastProps & { index: number }> = ({
  type,
  message,
  id,
  index
}) => {
  const dispatch = useToastDispatchContext()
  const [showToast, setShowToast] = React.useState(true)
  const { show, aniType } = useToastAnimate(showToast, () => {
    dispatch({ id, type: 'DELETE_TOAST' } as ToastAction)
  })
  const currentToast = toastMap.get(type)

  return (
    show && (
      <div
        className={aniType + ' absolute bottom-0 left-1/2'}
        style={
          {
            '--index': index,
            transform: `translate(-50%, calc(var(--index) * -100%))`,
            transition: 'transform 0.3s ease-in-out'
          } as React.CSSProperties
        }
      >
        <div className="rounded bg-green-50 py-3 px-4 m-3">
          <div className="flex items-center">
            <div className="flex-shrink-0">{currentToast?.icon}</div>
            <p
              className={`text-sm font-medium ml-3 ${currentToast?.messageClass}`}
            >
              {message}
            </p>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <IconButton
                  onClick={() => setShowToast(false)}
                  className={currentToast?.btnClass}
                >
                  <span className="sr-only">Dismiss</span>
                  <XCircle />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export { Toast }
