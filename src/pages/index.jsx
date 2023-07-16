import { Link } from 'react-router-dom'
import Button from '@/packages/components/Button'
import { ArrowRight, HelpCircle, Github } from 'lucide-react'

export default () => {
  return (
    <div className="container flex flex-col gap-4">
      <div className="mx-auto w-80">
        <svg
          width="100%"
          viewBox="0 0 33.455 36.987"
          fill="var(--md-sys-color-surface)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            stroke="var(--md-sys-color-primary)"
            transform="translate(-28.272 365)"
            d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
          />
        </svg>
      </div>
      <p className="text-center text-4xl font-extrabold ">React Material Design 3 Components Library</p>
      <div className="flex justify-center gap-2">
        <Link to="/get-started">
          <Button trailing-icon>
            Get Started
            <span slot="icon" className="flex items-center">
              <ArrowRight />
            </span>
          </Button>
        </Link>
        <Link to="/getting-started/why-actify">
          <Button color="secondary">
            <span slot="icon" className="flex items-center">
              <HelpCircle />
            </span>
            Why Actify
          </Button>
        </Link>
        <Button variant="outlined" href="https://github.com/actifyjs/actify" target="_blank">
          <span slot="icon" className="flex items-center">
            <Github />
          </span>
          GitHub
        </Button>
      </div>
    </div>
  )
}
