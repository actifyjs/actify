import { Icon, IconButton, TextField } from 'actify'

import { useState } from 'react'

export default () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className="grid gap-2 grid-cols-1 sm:grid-cols-2">
      <TextField label="Email" suffixText="@actifyjs.com">
        <TextField.LeadingIcon>
          <Icon>mail</Icon>
        </TextField.LeadingIcon>
      </TextField>

      <TextField
        label="Password"
        variant="outlined"
        autoComplete="off"
        type={showPassword ? 'text' : 'password'}
      >
        <TextField.LeadingIcon>
          <Icon>lock</Icon>
        </TextField.LeadingIcon>

        <TextField.TrailingIcon>
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            <Icon>{showPassword ? 'visibility_off' : 'visibility'}</Icon>
          </IconButton>
        </TextField.TrailingIcon>
      </TextField>
    </form>
  )
}
