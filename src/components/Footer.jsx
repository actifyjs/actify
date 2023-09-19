import { useApp } from './AppContext'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const { left } = useApp()
  const { pathname } = useLocation()
  const marginLeft = pathname == '/' ? '0' : left

  return (
    <footer style={{ marginLeft }} className="shadow-inner">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-center">Copyright © 2023 Actify</p>
        <p className="text-center">
          Released under the{' '}
          <a
            className="underline"
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noreferrer"
          >
            MIT License
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
