'use client'
import React from 'react'
import { Toast } from './Toast'
import { useToastStateContext } from './ToastContext'

const ToastContainer = () => {
  const { toasts } = useToastStateContext()

  return (
    <div className="fixed bottom-10 w-full z-50">
      <div className="max-w-xl mx-auto">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  )
}

export { ToastContainer }
