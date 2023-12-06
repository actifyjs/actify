import {
  Badge,
  Button,
  Slider,
  Radio,
  Switch,
  Checkbox,
  TextField,
  IconButton
} from 'actify'
import { User } from 'lucide-react'

export default () => {
  return (
    <div className="space-y-2 rounded-lg border border-outline/20 bg-tertiary-container bg-opacity-30 p-4">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
        <Button>primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="tertiary">tertiary</Button>
        <Button color="error">error</Button>
        <Button disabled>disabled</Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
        <IconButton variant="filled-tonal" color="primary">
          <User />
        </IconButton>
        <IconButton variant="filled-tonal" color="secondary">
          <User />
        </IconButton>
        <IconButton variant="filled-tonal" color="tertiary">
          <User />
        </IconButton>
        <IconButton variant="filled-tonal" color="error">
          <User />
        </IconButton>
        <IconButton variant="filled-tonal" disabled>
          <User />
        </IconButton>

        <IconButton>
          <User />
          <Badge value={999} color="primary" />
        </IconButton>
        <IconButton>
          <User />
          <Badge value={999} color="secondary" />
        </IconButton>
        <IconButton>
          <User />
          <Badge value={999} color="tertiary" />
        </IconButton>
        <IconButton>
          <User />
          <Badge value={999} />
        </IconButton>
        <IconButton disabled>
          <User />
          <Badge value={999} />
        </IconButton>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2">
        <TextField label="primary" />
        <TextField label="secondary" color="secondary" />
        <TextField label="tertiary" color="tertiary" />
        <TextField label="error" color="error" />
        <TextField label="disabled" disabled />

        <TextField variant="outlined" label="primary" />
        <TextField variant="outlined" label="secondary" color="secondary" />
        <TextField variant="outlined" label="tertiary" color="tertiary" />
        <TextField variant="outlined" label="error" color="error" />
        <TextField variant="outlined" label="disabled" disabled />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
        <label className="flex items-center">
          <Checkbox defaultChecked />
          <span>primary</span>
        </label>
        <label className="flex items-center">
          <Checkbox defaultChecked color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center">
          <Checkbox defaultChecked color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center">
          <Checkbox defaultChecked color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center">
          <Checkbox defaultChecked color="error" disabled />
          <span>disabled</span>
        </label>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
        <label className="flex items-center gap-2">
          <Radio name="actify" value="vue" />
          <span>primary</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="actify" value="react" color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="actify" value="nuxt" color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="actify" value="next" color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="actify" value="next" color="error" disabled />
          <span>disabled</span>
        </label>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
        <label className="flex items-center gap-2">
          <Switch defaultSelected />
          <span>primary</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch defaultSelected color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch defaultSelected color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch defaultSelected color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch defaultSelected color="error" disabled />
          <span>disabled</span>
        </label>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2">
        <Slider defaultValue={50} labeled />
        <Slider defaultValue={50} labeled color="secondary" />
        <Slider defaultValue={50} labeled color="tertiary" />
        <Slider defaultValue={50} labeled color="error" />
        <Slider defaultValue={50} labeled disabled />
      </div>
    </div>
  )
}
