import { Icon, TextField } from 'actify'

export default () => {
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <TextField label="outlined" placeholder="placeholder" />
        <TextField disabled label="disabled" placeholder="placeholder" />
      </div>
    </>
  )
}
