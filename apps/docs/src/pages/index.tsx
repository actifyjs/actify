import { Button } from 'actify'
import { useEffect } from 'react'
import Logo from '@/components/Logo'
import { Link } from 'react-router-dom'
import { useAppStore } from '@/store/appStore'
import { ArrowRight, Github, HelpCircle } from 'lucide-react'

export default () => {
  const app = useAppStore()
  useEffect(() => {
    document.title =
      'Actify — 🌻React Tailwind CSS Material Design 3 Components Library'
    app.setDrawer(false)
  }, [])
  return (
    <div className="flex flex-col gap-4 pt-2">
      <div className="mx-auto w-80 max-sm:w-40">
        <Logo />
      </div>
      <p className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold ">
        React Material Design 3 Components Library
      </p>
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <Link to="/getting-started/installation">
          <Button className="sm:before:content-['Get']">
            Started
            <ArrowRight />
          </Button>
        </Link>
        <Link to="/getting-started/why-actify">
          <Button color="secondary" className="sm:after:content-['Actify']">
            <HelpCircle />
            Why
          </Button>
        </Link>
        <Button
          target="_blank"
          variant="outlined"
          href="https://github.com/actifyjs/actify"
        >
          <Github />
          GitHub
        </Button>
      </div>
    </div>
  )
}
