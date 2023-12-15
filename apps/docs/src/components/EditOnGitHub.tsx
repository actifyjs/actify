import { Button } from 'actify'
import { PenSquare } from 'lucide-react'

const EditOnGitHub = ({ pathname }: { pathname: string }) => {
  return (
    <Button
      variant="text"
      target="_blank"
      href={`https://github.com/actifyjs/actify/blob/main/apps/docs/src/docs${pathname}.md`}
    >
      Edit this page on GitHub
      <PenSquare name="pen-square" size={18} />
    </Button>
  )
}

export default EditOnGitHub
