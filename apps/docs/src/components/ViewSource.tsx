import { Github } from 'lucide-react'
import { IconButton, Tooltip } from 'actify'

const ViewSource = ({ name }: { name: string }) => {
  const capitalize = name.charAt(0).toUpperCase() + name.slice(1)
  const sourceUrl = `https://github.com/actifyjs/actify/tree/main/packages/actify/src/components/${capitalize}`
  return (
    <Tooltip placement="top" content="View Source">
      <IconButton target="_blank" href={sourceUrl}>
        <Github />
      </IconButton>
    </Tooltip>
  )
}

export default ViewSource
