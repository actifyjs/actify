import icons from '@/src/icons.json'
import { useEffect, useState, useTransition } from 'react'
import { Icon, Tooltip, TextField, LinearProgress } from 'actify'

export default (props) => {
  const [isPending, startTransition] = useTransition()
  const [filterIcons, setFilterIcons] = useState([])
  const { icon, name, ...rest } = props

  useEffect(() => {
    setFilterIcons(icons)
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    const reg = new RegExp(value, 'i')
    startTransition(() => {
      setFilterIcons(icons.filter((item) => reg.test(item)))
    })
  }

  // copy icon
  const cliptoboard = (str) => {
    navigator.clipboard.writeText(str).then(
      () => {
        console.log('Copied!')
      },
      () => {
        console.log('Copy Failed!')
      }
    )
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
        {filterIcons.map((item) => (
          <Tooltip key={item}>
            <Tooltip.Activator>
              <Icon
                size={36}
                name={item}
                color="primary"
                onClick={() => cliptoboard(item)}
                className="flex items-center justify-center cursor-pointer p-2 bg-black/10 dark:bg-white/10 rounded-md"
              />
            </Tooltip.Activator>
            <Tooltip.Content>{item}</Tooltip.Content>
          </Tooltip>
        ))}
      </div>
    </>
  )
}
