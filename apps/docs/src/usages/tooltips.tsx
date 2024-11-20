import { Button, Tooltip, TooltipTrigger } from 'actify'

export default () => {
  return (
    <>
      <TooltipTrigger>
        <Button>Show Tooltip</Button>
        <Tooltip>Hello Tooltip</Tooltip>
      </TooltipTrigger>
    </>
  )
}
