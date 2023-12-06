import React from 'react'
import { Button } from 'actify'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<{
    to: string
    label?: string
    target?: string
    headline?: string
  }>
}
const Dropdown: React.FC<DropdownProps> = (props) => {
  const { title, items } = props

  return (
    <div className="relative inline-block">
      <Button
        variant="text"
        className="peer [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:hover:rotate-90"
      >
        {title}
        <div className="flex items-center">
          <ChevronDown size={20} />
        </div>
      </Button>

      <div className="absolute hidden w-28 flex-col bg-surface text-on-surface drop-shadow-lg hover:flex peer-hover:flex">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            target={item.target}
            className="block px-4 py-2 text-sm hover:bg-on-surface hover:bg-opacity-5"
          >
            {item.headline}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
