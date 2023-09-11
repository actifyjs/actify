import { Icon, TextField, IconButton } from 'actify'

export default () => {
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <TextField variant="filled" label="filled">
          <TextField.Slot name="suffixText">@actifyjs.com</TextField.Slot>
          <TextField.Slot name="leadingIcon">
            <Icon name="Search" />
          </TextField.Slot>

          <TextField.Slot name="trailingIcon">
            <IconButton>
              <Icon name="Calendar" />
            </IconButton>
          </TextField.Slot>

          <TextField.Slot name="prefixText">$</TextField.Slot>
        </TextField>
        <TextField variant="outlined" label="outlined" placeholder="outlined" />
      </div>
    </>
  )
}
