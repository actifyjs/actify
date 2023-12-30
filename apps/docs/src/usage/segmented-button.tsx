import { SegmentedButton, Button } from 'actify'
import { Moon, Monitor, Sun } from 'lucide-react'

export default () => {
  return (
    <div className="flex items-center gap-4">
      <SegmentedButton
        variant="outlined"
        activeIndex={[1]}
        onChange={(value) => console.log(value)}
      >
        <Button>
          <Moon />
        </Button>
        <Button>
          <Monitor />
        </Button>
        <Button>
          <Sun />
        </Button>
      </SegmentedButton>
    </div>
  )
}
