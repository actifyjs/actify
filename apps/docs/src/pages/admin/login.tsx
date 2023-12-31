import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, IconButton } from 'actify'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default () => {
  const navigate = useNavigate()
  const [splash, setSplash] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const randomUnsplash = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?orientation=landscape&client_id=${
        import.meta.env.VITE_AccessKey
      }`
    )
    const data = await response.json()
    setSplash(data.urls.regular)
  }
  useEffect(() => {
    randomUnsplash()
  }, [])

  const handleSubmit = () => {
    navigate('/admin')
  }

  return (
    <div className="max-w-7xl mx-auto grid h-screen place-content-center">
      <form className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src={
              splash ||
              'https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt="unsplash"
            onClick={randomUnsplash}
            className="rounded-l-lg h-full object-cover"
          />
        </div>
        <div className="rounded-lg md:rounded-l-none md:rounded-r-lg p-10 bg-black/10 h-full flex flex-col gap-4 justify-center">
          <img alt="logo" className="mx-auto w-40 h-40" src="/actify.svg" />
          <TextField
            label="Email"
            className="w-full"
            defaultValue="lerte"
            suffixText="@actifyjs.com"
          >
            <TextField.LeadingIcon>
              <Mail />
            </TextField.LeadingIcon>
          </TextField>

          <TextField
            label="Password"
            className="w-full"
            autoComplete="off"
            defaultValue="actify"
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
          <Button onClick={handleSubmit}>Login</Button>
        </div>
      </form>
    </div>
  )
}
