import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useApp } from './App/AppContext'

const Footer = forwardRef((props, ref) => {
  const { app } = useApp()
  const { onClick, children, className, ...rest } = props

  return (
    <footer ref={ref} {...rest} style={{ paddingLeft: app.left }} className={twMerge('shadow-inner', className)}>
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-center">Copyright © 2023 Actify</p>
        <p className="text-center">
          Released under the{' '}
          <a className="underline" href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
            MIT License
          </a>
        </p>
      </div>
    </footer>
  )
})

export default Footer
