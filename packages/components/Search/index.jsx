import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from 'actify'

const variants = tv('flex items-center px-4 py-1 h-14 rounded-full bg-black/5 dark:bg-white/5', {
  variants: {
    variant: {}
  },
  defaultVariants: {
    variant: ''
  }
})

const Search = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div className={variants({ className })}>
      <Icon name="Menu" size="24" />
      <input ref={ref} {...rest} type="text" className="mx-4 flex-grow bg-transparent focus-visible:outline-none" />
      <Icon name="Search" size="24" />
    </div>
  )
})

Search.displayName = 'Actify.Search'

export default Search
