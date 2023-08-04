import icons from '@/src/icons.json'
import { useEffect, useState, useTransition } from 'react'
import { Icon, TextField } from '@/packages/components'

export default (props) => {
  const [isPending, startTransition] = useTransition()
  const [filterIcons, setFilterIcons] = useState([])
  const { icon, name, ...rest } = props

  useEffect(() => {
    setFilterIcons(icons)
  }, [])

  const handleInput = (e) => {
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
      <Icon name="Home" {...rest} />
      <TextField className="my-2 w-full" onInput={handleInput} placeholder={`Search icon in ${icons.length}`} />
      <div className="gap-2 grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))]">
        {filterIcons.map((item) => (
          <Icon
            size={36}
            key={item}
            name={item}
            color="primary"
            onClick={() => cliptoboard(item)}
            className="flex items-center justify-center cursor-pointer p-2 bg-black/10 dark:bg-white/10 rounded-md"
          />
        ))}
      </div>
    </>
  )
}
