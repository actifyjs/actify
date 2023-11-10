import { useState } from 'react'
import { Icon, TextField, IconButton } from 'actify'

export default () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className="flex items-center gap-2 flex-wrap">
      <TextField label="Email" suffixText="@actifyjs.com">
        <TextField.LeadingIcon>
          <Icon name="mail" />
        </TextField.LeadingIcon>
      </TextField>

      <TextField
        label="Password"
        variant="outlined"
        autoComplete="off"
        type={showPassword ? 'text' : 'password'}
      >
        <TextField.LeadingIcon>
          <Icon name="lock" />
        </TextField.LeadingIcon>

        <TextField.TrailingIcon>
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            <Icon name={showPassword ? 'eye-off' : 'eye'} />
          </IconButton>
        </TextField.TrailingIcon>
      </TextField>
    </form>
  )
}
