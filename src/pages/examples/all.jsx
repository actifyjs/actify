import {
  Icon,
  Badge,
  Button,
  Slider,
  Switch,
  Checkbox,
  TextField,
  IconButton,
  RadioButton
} from 'actify'

export default () => {
  return (
    <div className="space-y-2 rounded-lg border border-outline/20 bg-tertiary-container bg-opacity-30 p-4">
      <div className="grid grid-cols-5 gap-2">
        <Button>primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="tertiary">tertiary</Button>
        <Button color="error">error</Button>
        <Button disabled>disabled</Button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <IconButton>
          <Icon name="User" />
          <Badge value={999} color="primary" />
        </IconButton>
        <IconButton>
          <Icon name="User" />
          <Badge value={999} color="secondary" />
        </IconButton>
        <IconButton>
          <Icon name="User" />
          <Badge value={999} color="tertiary" />
        </IconButton>
        <IconButton>
          <Icon name="User" />
          <Badge value={999} />
        </IconButton>
        <IconButton disabled>
          <Icon name="User" />
          <Badge value={999} />
        </IconButton>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <IconButton variant="filled-tonal" color="primary">
          <Icon name="User" />
        </IconButton>
        <IconButton variant="filled-tonal" color="secondary">
          <Icon name="User" />
        </IconButton>
        <IconButton variant="filled-tonal" color="tertiary">
          <Icon name="User" />
        </IconButton>
        <IconButton variant="filled-tonal" color="error">
          <Icon name="User" />
        </IconButton>
        <IconButton variant="filled-tonal" disabled>
          <Icon name="User" />
        </IconButton>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <TextField label="primary" />
        <TextField label="secondary" color="secondary" />
        <TextField label="tertiary" color="tertiary" />
        <TextField label="error" color="error" />
        <TextField label="disabled" disabled />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <TextField variant="outlined" label="primary" />
        <TextField variant="outlined" label="secondary" color="secondary" />
        <TextField variant="outlined" label="tertiary" color="tertiary" />
        <TextField variant="outlined" label="error" color="error" />
        <TextField variant="outlined" label="disabled" disabled />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <label className="flex items-center">
          <Checkbox checked />
          <span>primary</span>
        </label>
        <label className="flex items-center">
          <Checkbox checked color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center">
          <Checkbox checked color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center">
          <Checkbox checked color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center">
          <Checkbox checked color="error" disabled />
          <span>disabled</span>
        </label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <label className="flex items-center gap-2">
          <RadioButton name="actify" value="vue" />
          <span>primary</span>
        </label>
        <label className="flex items-center gap-2">
          <RadioButton name="actify" value="react" color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center gap-2">
          <RadioButton name="actify" value="nuxt" color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center gap-2">
          <RadioButton name="actify" value="next" color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center gap-2">
          <RadioButton name="actify" value="next" color="error" disabled />
          <span>error</span>
        </label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <label className="flex items-center gap-2">
          <Switch selected />
          <span>primary</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch selected color="secondary" />
          <span>secondary</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch selected color="tertiary" />
          <span>tertiary</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch selected color="error" />
          <span>error</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch selected color="error" disabled />
          <span>disabled</span>
        </label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Slider labeled />
        <Slider labeled color="secondary" />
        <Slider labeled color="tertiary" />
        <Slider labeled color="error" />
        <Slider labeled disabled />
      </div>
    </div>
  )
}
