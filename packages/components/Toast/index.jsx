import { ToastProvider } from './ToastContext'
import { ToastContainer } from './ToastContainer'
import { useToastDispatchContext } from './ToastContext'

const useToast = () => {
  const dispatch = useToastDispatchContext()

  const toast = (type, message, duration = 2000) => {
    const id = Math.random().toString(36).substr(2, 9)
    dispatch({
      type: 'ADD_TOAST',
      toast: {
        id,
        type,
        message
      }
    })

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id })
    }, duration)
  }

  return toast
}

export { useToast, ToastContainer, ToastProvider }
