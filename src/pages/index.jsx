import { Link } from 'react-router-dom'
import Button from '@/packages/components/Button'
import { ArrowRight, HelpCircle, Github } from 'lucide-react'

export default () => {
  return (
    <div className="container flex flex-col gap-4">
      <img className="mx-auto w-80" src="/actify.svg" alt="Actify Logo" />
      <p className="text-center text-4xl font-extrabold ">React Material Design 3 Components Library</p>
      <div className="flex justify-center gap-2">
        <Link to="/get-started">
          <Button variant="filled" trailing-icon>
            Get Started
            <div slot="icon" className="flex items-center">
              <ArrowRight />
            </div>
          </Button>
        </Link>
        <Link to="/why-actify">
          <Button variant="outlined">
            <div slot="icon" className="flex items-center">
              <HelpCircle />
            </div>
            Why Actify
          </Button>
        </Link>
        <Button variant="tonal" href="https://github.com/actifyjs/actify" target="_blank">
          <div slot="icon" className="flex items-center">
            <Github />
          </div>
          GitHub
        </Button>
      </div>
    </div>
  )
}
