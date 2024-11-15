'use client'

import { Icon, Label, LinearProgress, Switch, TextField } from 'actify'
import { RefObject, useEffect, useRef, useState, useTransition } from 'react'

import DocPreview from '@/components/DocPreview'
import icons from './icons.json'
import { toast } from 'sonner'
import { useInView } from 'framer-motion'

const IconWrapper = ({
  children,
  fill
}: {
  children: string
  fill: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as RefObject<Element>)

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
        <Icon
          fill={fill}
          className="[--md-icon-size:36px]"
          onClick={() => copy(children)}
        >
          {children}
        </Icon>
      ) : (
        <div className="size-9 p-2 animate-pulse" />
      )}
    </div>
  )
}

export default () => {
  const [selected, setSelected] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [filterIcons, setFilterIcons] = useState<string[]>([])

  useEffect(() => {
    setFilterIcons(icons)
  }, [])

  const handleChange = (value: string) => {
    const reg = new RegExp(value, 'i')
    startTransition(() => {
      setFilterIcons(icons.filter((icon) => reg.test(icon)))
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <Label>Outlined</Label>
      <DocPreview code="<Icon>home</Icon>" />
      <Label>Filled</Label>
      <DocPreview code="<Icon fill>home</Icon>" />

      <Label className="flex items-center gap-2">
        <Switch
          color="primary"
          aria-label="type"
          isSelected={selected}
          onChange={(value) => setSelected(value)}
        />
        <span>{selected ? 'Filled' : 'Outlined'}</span>
      </Label>

      <TextField
        onChange={handleChange}
        label={`Search ${filterIcons.length} icons`}
      />

      <LinearProgress isIndeterminate={isPending} />
      <div className="mt-2 gap-2 grid grid-cols-[repeat(auto-fill,minmax(52px,1fr))]">
        {filterIcons.map((icon) => (
          <IconWrapper key={icon} fill={selected}>
            {icon}
          </IconWrapper>
        ))}
      </div>
    </div>
  )
}
