import { useRef } from 'react'
import { Button, Snackbar } from 'actify'

export default () => {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current = 'Hello Actify'
  }

  return (
    <Button onClick={handleClick}>
      Click to show snackbar
      <Snackbar
        children={(add) => {
          ref.current = add
        }}
      />
    </Button>
  )
}
