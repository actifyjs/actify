import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'actify'
import Logo from '@/src/components/Logo'

export default () => {
  return (
    <div className="container flex flex-col gap-4">
      <div className="mx-auto w-80">
        <Logo width="100%" />
      </div>
      <p className="text-center text-4xl font-extrabold ">
        React Material Design 3 Components Library
      </p>
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <Link to="/getting-started/installation">
          <Button className="sm:before:content-['Get']">
            Started
            <Icon name="ArrowRight" />
          </Button>
        </Link>
        <Link to="/getting-started/why-actify">
          <Button color="secondary" className="sm:after:content-['Actify']">
            <Icon name="HelpCircle" />
            Why
          </Button>
        </Link>
        <Button
          variant="outlined"
          href="https://github.com/actifyjs/actify"
          target="_blank"
        >
          <Icon name="Github" />
          GitHub
        </Button>
      </div>
      <DropDownMenu />
    </div>
  )
}

const DropDownMenu = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <ul className="border p-5">
      <li className="cursor-pointer">
        <span onClick={() => setOpen(!open)}>group</span>
        <div
          className={`transition-all duration-300 ease-in-out grid ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <ul className="pl-5 overflow-hidden">
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
          </ul>
        </div>
      </li>
      <li>ipsum</li> <li>dolor</li>
    </ul>
  )
}
