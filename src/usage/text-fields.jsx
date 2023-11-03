import { useState } from 'react'
import { Icon, TextField, IconButton } from 'actify'

export default () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <TextField label="Email" suffixText="@actifyjs.com">
          <TextField.LeadingIcon>
            <Icon name="mail" />
          </TextField.LeadingIcon>
        </TextField>

        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
        >
          <TextField.LeadingIcon>
            <Icon name="lock" />
          </TextField.LeadingIcon>

          <TextField.TrailingIcon>
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              <Icon name="eye" />
            </IconButton>
          </TextField.TrailingIcon>
        </TextField>
      </div>
    </>
  )
}
