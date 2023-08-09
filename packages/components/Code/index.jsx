import Prism from 'prismjs'
import { Icon, IconButton } from 'actify'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-jsx.min.js'
import { useRef, useState, useEffect } from 'react'
import 'prism-material-themes/themes/material-palenight.css'

const Code = (props) => {
  const ref = useRef()
  const { code, language, children } = props
  const [iconName, setIconName] = useState('Copy')

  useEffect(() => {
    highlight()
  }, [])

  const highlight = () => {
    if (ref && ref.current) Prism.highlightElement(ref.current)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code || children).then(
      () => {
        setIconName('Check')
        setTimeout(() => {
          setIconName('Copy')
        }, 2000)
      },
      () => {
        setIconName('CopyX')
        setTimeout(() => {
          setIconName('Copy')
        }, 2000)
      }
    )
  }

  return (
    <div className="group !overflow-x-hidden">
      <div className="-mb-8 flex h-6 items-center justify-between px-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#f95f55]"></div>
          <div className="h-3 w-3 rounded-full bg-[#feba35]"></div>
          <div className="h-3 w-3 rounded-full bg-[#26c63e]"></div>
        </div>
        <div className="mt-6 cursor-pointer text-white opacity-0 transition-opacity hover:text-white/75 group-hover:opacity-100">
          <IconButton variant="filled" onClick={copyCode} color="surface">
            <Icon name={iconName} />
          </IconButton>
        </div>
      </div>

      <pre>
        <code ref={ref} className={`language-${language}`}>
          {code || children}
        </code>
      </pre>
    </div>
  )
}

Code.displayName = 'Actify.Code'

export default Code
