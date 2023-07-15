import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Button from '@/packages/components/Button'
import { useState, useRef, useEffect } from 'react'

const Dropdown = (props) => {
  const { title, items } = props
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [menuHeight, setMenuHeight] = useState(0)

  useEffect(() => {
    setMenuHeight(isOpen ? dropdownRef.current.scrollHeight : 0)
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block">
      <Button variant="text" trailing-icon onClick={toggleMenu}>
        {title}
        <div slot="icon" className="flex items-center">
          <ChevronDown size={20} />
        </div>
      </Button>
      <div
        ref={dropdownRef}
        className="absolute right-0 z-10 w-32 origin-top-right overflow-hidden rounded-md bg-surface shadow-lg transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? `${menuHeight}px` : '0'
        }}
      >
        <div className="border-gray-200 rounded-md border py-1 shadow-md">
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
    </div>
  )
}

Dropdown.displayName = 'Actify.Dropdown'

export default Dropdown
