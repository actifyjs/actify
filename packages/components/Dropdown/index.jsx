import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Button from '@/packages/components/Button'

const Dropdown = (props) => {
  const { title, items } = props

  return (
    <div className="relative inline-block">
      <Button variant="text" trailing-icon className="peer">
        {title}
        <div slot="icon" className="flex items-center">
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

Dropdown.displayName = 'Actify.Dropdown'

export default Dropdown
