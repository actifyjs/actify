import { ToastContainer } from './ToastContainer'
import {
  ToastProvider,
  useToastDispatchContext,
  ToastAction
} from './ToastContext'

const useToast = () => {
  const dispatch = useToastDispatchContext()

  const toast = (
    type: 'success' | 'error',
    message: string,
    duration = 2000
  ) => {
    const id = Math.random().toString(36).substr(2, 9)
    dispatch({
      id,
      type: 'ADD_TOAST',
      toast: {
        id,
        type,
        message
      }
    })

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id } as ToastAction)
    }, duration)
  }

  return toast
}

export { useToast, ToastContainer, ToastProvider }
