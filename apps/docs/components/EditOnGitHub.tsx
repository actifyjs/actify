import { Button } from 'actify'
import { PenSquare } from 'lucide-react'

type EditOnGitHubProps = {
  pathname: string | null
}
const EditOnGitHub = ({ pathname }: EditOnGitHubProps) => {
  let filename = ''
  if (pathname?.startsWith('/components')) {
    filename = pathname
  } else {
    filename = '/pages' + pathname
  }
  return (
    <Button
      variant="text"
      target="_blank"
      href={`https://github.com/actifyjs/actify/blob/main/apps/docs/content${filename}.mdx`}
    >
      Edit this page on GitHub
      <PenSquare name="pen-square" size={18} />
    </Button>
  )
}

export default EditOnGitHub
