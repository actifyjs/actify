import { useState } from 'react'
import { TextField, Button, IconButton, Checkbox } from 'actify'
import {
  X,
  Eye,
  Lock,
  User,
  Mail,
  Check,
  EyeOff,
  Smartphone
} from 'lucide-react'

export default () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
      <form className="shadow bg-surface p-4 rounded-xl flex flex-col gap-2">
        <p>filled with icon</p>
        <TextField label="username">
          <TextField.LeadingIcon>
            <User />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="email">
          <TextField.LeadingIcon>
            <Mail />
          </TextField.LeadingIcon>
        </TextField>
        <TextField type="number" label="mobile">
          <TextField.LeadingIcon>
            <Smartphone />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="pasword" type="password">
          <TextField.LeadingIcon>
            <Lock />
          </TextField.LeadingIcon>
        </TextField>
        <label className="flex items-center">
          <Checkbox title="remember me" />
          <span>Remember me</span>
        </label>
        <div className="flex gap-4">
          <Button type="button">Submit</Button>
          <Button type="button" color="error">
            Reset
          </Button>
        </div>
      </form>
      <form className="shadow bg-surface p-4 rounded-xl flex flex-col gap-2">
        <p>outlined leading/trailing icon suffixText</p>
        <TextField variant="outlined" label="username">
          <TextField.LeadingIcon>
            <User />
          </TextField.LeadingIcon>
        </TextField>
        <TextField variant="outlined" label="email" suffixText="@actifyjs.com">
          <TextField.LeadingIcon>
            <Mail />
          </TextField.LeadingIcon>
        </TextField>
        <TextField type="number" variant="outlined" label="mobile">
          <TextField.LeadingIcon>
            <Smartphone />
          </TextField.LeadingIcon>
        </TextField>
        <TextField
          variant="outlined"
          label="pasword"
          type={showPassword ? 'text' : 'password'}
        >
          <TextField.LeadingIcon>
            <Lock />
          </TextField.LeadingIcon>
          <TextField.TrailingIcon>
            <IconButton onClick={() => setShowPassword((_) => !_)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </IconButton>
          </TextField.TrailingIcon>
        </TextField>
        <label className="flex items-center">
          <Checkbox title="remember me" />
          <span>Remember me</span>
        </label>
        <div className="flex gap-4">
          <Button className="rounded-lg" type="button" variant="outlined">
            <Check />
            Submit
          </Button>
          <Button className="rounded-lg" type="button" variant="outlined">
            <X />
            Rest
          </Button>
        </div>
      </form>
    </div>
  )
}
