import { Button, Icon } from 'actify'

type EditOnGitHubProps = {
  pathname: string | null
}
const EditOnGitHub = ({ pathname }: EditOnGitHubProps) => {
  return (
    <a
      tabIndex={-1}
      target="_blank"
      href={`https://github.com/actifyjs/actify/blob/main/apps/docs/content${pathname}.md`}
    >
      <Button variant="text">
        Edit this page on GitHub
        <Icon>edit</Icon>
      </Button>
    </a>
  )
}

export default EditOnGitHub
