import { useRef } from 'react'
import { Button, Dialog } from 'actify'

export default () => {
  const ref = useRef(null)
  const handleClick = () => {
    ref.current.show()
  }

  return (
    <>
      <Button onClick={handleClick}>Open Dialog</Button>
      <Dialog ref={ref} draggable headline="Reset settigns">
        This is a standard alert dialog. Alert dialogs interrupt users with urgent information, details, or actions.
      </Dialog>
    </>
  )
}
