import { useRef } from 'react'
import { Button, Snackbar } from 'actify'

export default () => {
  const ref = useRef(null)
  const handleClick = () => {
    const echo = () => 'Hello Actify ' + Math.random()
    ref.current?.(echo())
  }

  return (
    <Button onClick={handleClick}>
      Click to show snackbar
      <Snackbar children={(add) => (ref.current = add)} />
    </Button>
  )
}
