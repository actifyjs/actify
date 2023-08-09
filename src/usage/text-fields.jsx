import { TextField } from 'actify'

export default () => {
  return (
    <div className="flex items-center gap-2">
      <TextField label="filled" placeholder="placeholder" />
      <TextField variant="outlined" label="outlined" placeholder="placeholder" />
      <TextField variant="outlined" disabled label="disabled" placeholder="placeholder" />
    </div>
  )
}
