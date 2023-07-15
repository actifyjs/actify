import { useRef } from 'react'
import Code from '@/packages/components/Code'
import Button from '@/packages/components/Button'
import Dialog from '@/packages/components/Dialogs'

const codeBlock = `
import { useRef } from 'react'
import { Button, Dialog } from 'actify'

export default () => {
  const ref = useRef(null)
  
  const handleClick = () => {
    ref.current.show()
  }  

  return (
    <>
      <Button onClick={handleClick}>
        Open Dialog
      </Button>
      <Dialog ref={ref} draggable headline="Reset settigns">
        This is a standard alert dialog. Alert dialogs interrupt users with urgent information, details, or actions.
      </Dialog>    
    </>
  )
}
`

export default () => {
  const ref = useRef(null)

  const handleClick = () => {
    ref.current.show()
  }

  return (
    <>
      <div className="mt-4">
        <Button onClick={handleClick}>Open Dialog</Button>
        <Dialog ref={ref} draggable headline="Reset settigns">
          This is a standard alert dialog. Alert dialogs interrupt users with urgent information, details, or actions.
        </Dialog>
      </div>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
