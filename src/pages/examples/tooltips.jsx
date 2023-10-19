import { Button } from 'actify'
import { TooltipGroup, Tooltip } from './tooltip'

export default () => (
  <TooltipGroup>
    <div className="row">
      <Tooltip content="Hello!">
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip content="Hola!">
        <Button>and me</Button>
      </Tooltip>
      <Tooltip content="Ahoj!">
        <Button>and me</Button>
      </Tooltip>
    </div>
    <div className="mt-8">
      <Tooltip content="こんにちは!">
        <Button>try reaching me</Button>
      </Tooltip>
    </div>
  </TooltipGroup>
)
