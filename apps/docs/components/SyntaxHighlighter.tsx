'use client'
import { fira_code } from '@/app/fonts'
import { IconButton } from 'actify'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'
import { Check, Copy, CopyX } from 'lucide-react'

type CopyIconProps = {
  name: 'copy' | 'copy-x' | 'check'
}

const SyntaxHighlighter = (props: React.ComponentProps<'div'>) => {
  const { className, children } = props

  const { theme } = useTheme()

  const [code, setCode] = useState('')
  const [iconName, setIconName] = useState<CopyIconProps['name']>('copy')

  const mounted = useMounted()
  if (!mounted) {
    return null
  } else {
    const highlight = async () => {
      const { getHighlighter } = await import('shiki')
      const highlighter = await getHighlighter({
        themes: ['catppuccin-latte', 'catppuccin-mocha'],
        langs: ['shell', 'css', 'js', 'ts', 'jsx', 'tsx']
      })

      // @ts-ignore
      const _code = highlighter.codeToHtml(children as string, {
        themes: {
          light: 'catppuccin-latte',
          dark: 'catppuccin-mocha',
          system: 'catppuccin-mocha'
        },
        defaultColor: theme,
        // @ts-ignore
        lang: className.slice(9)
      })
      setCode(_code)
    }

    highlight()
  }

  const copyCode = () => {
    // @ts-ignore
    navigator.clipboard.writeText(children as string).then(
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
    <div
      className={`${fira_code.variable} group relative rounded-lg overflow-hidden`}
    >
      <div className="absolute top-3 right-6 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100">
        <IconButton variant="filled" onClick={copyCode} color="secondary">
          <CopyIcon name={iconName} />
        </IconButton>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="[&_code]:[fontFamily:var(--font-fira-code)] [&_code]:block [&_code]:w-full overflow-x-hidden max-h-72 [&_pre]:p-4 [&_pre]:!my-0"
      />
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
