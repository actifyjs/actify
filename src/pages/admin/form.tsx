import { useState } from 'react'
import { TextField, Button, IconButton, Icon, Checkbox } from 'actify'

export default () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
      <form className="shadow bg-surface p-4 rounded-xl flex flex-col gap-2">
        <p>filled with icon</p>
        <TextField label="username">
          <TextField.LeadingIcon>
            <Icon name="user" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="email">
          <TextField.LeadingIcon>
            <Icon name="mail" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField type="number" label="mobile">
          <TextField.LeadingIcon>
            <Icon name="smartphone" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField label="pasword" type="password">
          <TextField.LeadingIcon>
            <Icon name="lock" />
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
            <Icon name="user" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField variant="outlined" label="email" suffixText="@actifyjs.com">
          <TextField.LeadingIcon>
            <Icon name="mail" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField type="number" variant="outlined" label="mobile">
          <TextField.LeadingIcon>
            <Icon name="smartphone" />
          </TextField.LeadingIcon>
        </TextField>
        <TextField
          variant="outlined"
          label="pasword"
          type={showPassword ? 'text' : 'password'}
        >
          <TextField.LeadingIcon>
            <Icon name="lock" />
          </TextField.LeadingIcon>
          <TextField.TrailingIcon>
            <IconButton onClick={() => setShowPassword((_) => !_)}>
              <Icon name={showPassword ? 'eye-off' : 'eye'} />
            </IconButton>
          </TextField.TrailingIcon>
        </TextField>
        <label className="flex items-center">
          <Checkbox title="remember me" />
          <span>Remember me</span>
        </label>
        <div className="flex gap-4">
          <Button className="rounded-lg" type="button" variant="outlined">
            <Icon name="check"></Icon>
            Submit
          </Button>
          <Button className="rounded-lg" type="button" variant="outlined">
            <Icon name="x"></Icon>
            Rest
          </Button>
        </div>
      </form>
    </div>
  )
}
