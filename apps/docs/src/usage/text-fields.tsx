import { useState } from 'react'
import { TextField, IconButton } from 'actify'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className="flex items-center gap-2 flex-wrap">
      <TextField label="Email" suffixText="@actifyjs.com">
        <TextField.LeadingIcon>
          <Mail />
        </TextField.LeadingIcon>
      </TextField>

      <TextField
        label="Password"
        variant="outlined"
        autoComplete="off"
        type={showPassword ? 'text' : 'password'}
      >
        <TextField.LeadingIcon>
          <Lock />
        </TextField.LeadingIcon>

        <TextField.TrailingIcon>
          <IconButton onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <EyeOff /> : <Eye />}
          </IconButton>
        </TextField.TrailingIcon>
      </TextField>
    </form>
  )
}
