import Icon from '@/components/Icon'
import { useInView } from 'framer-motion'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { TextField, Tooltip, LinearProgress, useToast } from 'actify'
import React, { useRef, useEffect, useState, useTransition } from 'react'

type IconName = keyof typeof dynamicIconImports
const icons = Object.keys(dynamicIconImports) as IconName[]

const toCamelCase = (str: string) =>
  str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .split('-')
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join('')

export default () => {
  const [isPending, startTransition] = useTransition()
  const [filterIcons, setFilterIcons] = useState<IconName[]>([])

  useEffect(() => {
    setFilterIcons(icons)
  }, [])

  const handleChange = (e: any) => {
    const reg = new RegExp(e.target.value, 'i')
    startTransition(() => {
      setFilterIcons(icons.filter((item) => reg.test(item)))
    })
  }

  return (
    <div className="prose max-w-full">
      <blockquote>
        Icons is based on{' '}
        <a href="https://lucide.dev/" target="_blank">
          lucide-icon
        </a>
        , can custom color and size.
      </blockquote>
      <TextField
        className="w-full mb-2"
        onChange={handleChange}
        label={`Search ${filterIcons.length} icons`}
      />
      <LinearProgress indeterminate={isPending} value={0} />
      <div className="mt-2 gap-2 grid grid-cols-[repeat(auto-fill,minmax(52px,1fr))]">
        {filterIcons.map((name: IconName) => (
          <IconWrapper key={name} name={name} />
        ))}
      </div>
    </div>
  )
}

const IconWrapper = ({ name }: React.ComponentProps<typeof Icon>) => {
  const toast = useToast()
  const ref = useRef(null)
  const isInView = useInView(ref)

  // copy icon
  const cliptoboard = (str: string) => {
    navigator.clipboard
      .writeText(`import {${toCamelCase(str)}} from 'lucide-react'`)
      .then(
        () => {
          toast('success', `${toCamelCase(str)} Copied!`)
        },
        () => {
          toast('error', 'Copy Failed!')
        }
      )
  }

  return (
    <div
      ref={ref}
      className="flex items-center justify-center cursor-pointer p-2 bg-inverse-surface/10 rounded"
    >
      {isInView ? (
        <Tooltip content={toCamelCase(name)}>
          <i>
            <Icon
              size={36}
              name={name}
              className="text-primary"
              onClick={() => cliptoboard(name)}
            />
          </i>
        </Tooltip>
      ) : (
        <div className="w-9 h-9 bg-black/10 dark:bg-white/10 p-2"></div>
      )}
    </div>
  )
}
