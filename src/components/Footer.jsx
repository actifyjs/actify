import { useApp } from './AppContext'

const Footer = () => {
  const { drawer } = useApp()

  return (
    <footer
      className={`shadow-inner row-start-3 row-end-4 ${
        drawer ? 'col-start-2' : 'col-start-1'
      } col-end-4`}
    >
      <div className="mx-auto w-full max-w-screen-xl py-1 md:py-4 px-4 md:flex md:items-center md:justify-between">
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
