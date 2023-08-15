import { useRef } from 'react'
import { Button, Snackbar } from 'actify'
import { loremIpsum } from 'lorem-ipsum'

export default () => {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.(loremIpsum())
  }

  return (
    <Button onClick={handleClick}>
      Click to show snackbar
      <Snackbar
        timeout={200000}
        children={(add) => {
          ref.current = add
        }}
      />
    </Button>
  )
}
