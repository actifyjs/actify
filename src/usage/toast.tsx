import { useToast, ToastProvider, ToastContainer, Button } from 'actify'

const Container = () => {
  const toast = useToast()
  return (
    <div className="flex gap-2">
      <Button onClick={() => toast('success', 'hello from success toast')}>
        success toast
      </Button>
      <Button
        color="error"
        onClick={() => toast('error', 'bye from error toast')}
      >
        error toast
      </Button>
    </div>
  )
}

export default () => {
  return (
    <ToastProvider>
      <Container />
      <ToastContainer />
    </ToastProvider>
  )
}
