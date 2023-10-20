import { ToastProvider } from './ToastContext'
import { ToastContainer } from './ToastContainer'
import { useToastDispatchContext } from './ToastContext'

const useToast = (delay = 2000) => {
  const dispatch = useToastDispatchContext()

  const toast = (type, message) => {
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
    }, delay)
  }

  return toast
}

export { useToast, ToastContainer, ToastProvider }
