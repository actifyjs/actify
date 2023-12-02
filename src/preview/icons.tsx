import { useInView } from 'framer-motion'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { useRef, useEffect, useState, useTransition } from 'react'
import { Icon, TextField, Tooltip, LinearProgress, useToast } from 'actify'

const icons = Object.keys(dynamicIconImports)

export default () => {
  const [isPending, startTransition] = useTransition()
  const [filterIcons, setFilterIcons] = useState([])

  useEffect(() => {
    setFilterIcons(icons)
  }, [])

  const handleChange = (e) => {
    const reg = new RegExp(e.target.value, 'i')
    startTransition(() => {
      setFilterIcons(icons.filter((item) => reg.test(item)))
    })
  }

  return (
    <>
      <TextField
        className="w-full mb-2"
        onChange={handleChange}
        label={`Search ${filterIcons.length} icons`}
      />
      <LinearProgress indeterminate={isPending} value={0} />
      <div className="mt-2 gap-2 grid grid-cols-[repeat(auto-fill,minmax(52px,1fr))]">
        {filterIcons.map((name) => (
          <IconWrapper key={name} name={name} />
        ))}
      </div>
    </>
  )
}

const IconWrapper = ({ name }) => {
  const toast = useToast()
  const ref = useRef(null)
  const isInView = useInView(ref)

  // copy icon
  const cliptoboard = (str) => {
    navigator.clipboard.writeText(str).then(
      () => {
        toast('success', `${str} Copied!`)
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
        <Tooltip content={name}>
          <i>
            <Icon
              size={36}
              name={name}
              color="primary"
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
