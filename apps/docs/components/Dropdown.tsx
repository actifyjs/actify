import React from 'react'
import Link from 'next/link'
import { Button } from 'actify'
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
    <div className="relative">
      <Button variant="text" className="group peer px-2.5">
        {title}
        <div className="flex items-center transition-transform duration-300 group-hover:rotate-90">
          <ChevronDown size={20} />
        </div>
      </Button>

      <div className="absolute hidden w-28 flex-col bg-surface drop-shadow-lg hover:flex peer-hover:flex">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.to}
            target={item.target}
            className="block px-4 py-2 text-sm interactive-bg-surface"
          >
            {item.headline}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
