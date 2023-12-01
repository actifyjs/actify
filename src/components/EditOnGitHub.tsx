// @ts-nocheck
import { Icon, Button } from 'actify'

const EditOnGitHub = ({ pathname }) => {
  return (
    <Button
      variant="text"
      target="_blank"
      href={`https://github.com/actifyjs/actify/blob/main/src/docs${pathname}.md`}
    >
      Edit this page on GitHub
      <Icon name="pen-square" size={18} />
    </Button>
  )
}

export default EditOnGitHub
