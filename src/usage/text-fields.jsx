import { TextField } from 'actify'

export default () => {
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <TextField variant="filled" label="filled" />
        <TextField variant="outlined" label="outlined" placeholder="outlined" />
        <TextField disabled label="disabled" />
      </div>
    </>
  )
}
