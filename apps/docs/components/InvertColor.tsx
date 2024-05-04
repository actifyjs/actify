import { SunSnow } from 'lucide-react'
import { IconButton, Tooltip } from 'actify'

const InvertColor = () => {
  return (
    <Tooltip placement="top" content="Invert Color">
      <IconButton>
        <SunSnow />
      </IconButton>
    </Tooltip>
  )
}

export default InvertColor
