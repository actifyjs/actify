import { SegmentedButton, Button } from 'actify'

export default () => {
  return (
    <div className="flex items-center gap-4">
      <SegmentedButton>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </SegmentedButton>
    </div>
  )
}
