import React, {
  useRef,
  useState,
  useEffect,
  HtmlHTMLAttributes,
  HTMLAttributes
} from 'react'
import Prism from 'prismjs'
import { tv } from 'tailwind-variants'
import { Check, Copy, CopyX } from 'lucide-react'
import { IconButton } from 'actify'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prism-material-themes/themes/material-palenight.css'

const variants = tv({
  base: 'group !overflow-x-hidden'
})

type CopyIconProps = {
  name: 'copy' | 'copy-x' | 'check'
}

type SyntaxHighlighterProps = React.ComponentProps<'div'> & {
  code?: string
  language: string
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = (props) => {
  const ref = useRef<any>()
  const { className, code, language, children } = props
  const [iconName, setIconName] = useState<CopyIconProps['name']>('copy')

  useEffect(() => {
    highlight()
  }, [children])

  const highlight = () => {
    if (ref && ref.current) Prism.highlightElement(ref.current)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code || (children as string)).then(
      () => {
        setIconName('check')
        setTimeout(() => {
          setIconName('copy')
        }, 2000)
      },
      () => {
        setIconName('copy-x')
        setTimeout(() => {
          setIconName('copy')
        }, 2000)
      }
    )
  }

  return (
    <div className={variants({ className })}>
      <div className="-mb-8 flex h-6 items-center justify-between px-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#f95f55]"></div>
          <div className="h-3 w-3 rounded-full bg-[#feba35]"></div>
          <div className="h-3 w-3 rounded-full bg-[#26c63e]"></div>
        </div>
        <div className="mt-6 cursor-pointer text-white opacity-0 transition-opacity hover:text-white/75 group-hover:opacity-100">
          <IconButton variant="filled" onClick={copyCode} color="surface">
            <CopyIcon name={iconName} />
          </IconButton>
        </div>
      </div>

      <pre className="[&::-webkit-scrollbar]:hidden">
        <code
          ref={ref}
          className={`language-${language}`}
          style={{ fontFamily: 'JetBrains Mono' }}
        >
          {code || children}
        </code>
      </pre>
    </div>
  )
}

const IconMap = {
  copy: <Copy />,
  'copy-x': <CopyX />,
  check: <Check />
}
const CopyIcon: React.FC<CopyIconProps> = ({ name }) => {
  return IconMap[name]
}

export default SyntaxHighlighter
