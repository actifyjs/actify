'use client'

import { Icon, LinearProgress, TextField } from 'actify'
import { useEffect, useRef, useState, useTransition } from 'react'

import icons from './icons.json'
import { toast } from 'sonner'
import { useInView } from 'framer-motion'

const IconWrapper = ({ children }: { children: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const copy = (icon: string) => {
    navigator.clipboard.writeText(icon).then(
      () => {
        toast.success(`Icon ${icon} Copied!`)
      },
      () => {
        toast.error('Copy Failed!')
      }
    )
  }

  return (
    <div
      ref={ref}
      title={children}
      className="flex items-center justify-center cursor-pointer p-2 text-primary bg-on-primary rounded hover:text-inverse-primary hover:outline"
    >
      {isInView ? (
        <Icon className="[--md-icon-size:36px]" onClick={() => copy(children)}>
          {children}
        </Icon>
      ) : (
        <div className="size-9 p-2 animate-pulse" />
      )}
    </div>
  )
}

export default () => {
  const [isPending, startTransition] = useTransition()
  const [filterIcons, setFilterIcons] = useState<string[]>([])

  useEffect(() => {
    setFilterIcons(icons)
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const reg = new RegExp(value, 'i')
    startTransition(() => {
      setFilterIcons(icons.filter((icon) => reg.test(icon)))
    })
  }

  return (
    <div>
      <TextField
        className="w-full mb-2"
        onChange={handleChange}
        label={`Search ${filterIcons.length} icons`}
      />
      <LinearProgress indeterminate={isPending} value={0} />
      <div className="mt-2 gap-2 grid grid-cols-[repeat(auto-fill,minmax(52px,1fr))]">
        {filterIcons.map((icon) => (
          <IconWrapper key={icon}>{icon}</IconWrapper>
        ))}
      </div>
    </div>
  )
}
