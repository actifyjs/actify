'use client'
import { Toast } from './Toast'
import { useToastStateContext } from './ToastContext'

const ToastContainer = () => {
  const { toasts } = useToastStateContext()

  return (
    <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-50`}>
      {toasts &&
        toasts.map((toast, idx) => (
          <Toast
            id={toast.id}
            key={toast.id}
            type={toast.type}
            index={idx}
            message={toast.message}
          />
        ))}
    </div>
  )
}

export { ToastContainer }
