import { forwardRef } from 'react'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'
import { Menu, Search as SearchIcon } from 'lucide-react'

const variants = cva('flex items-center px-4 py-1 h-14 elevation-3 rounded-full bg-black/5 dark:bg-white/5', {
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
    <div className={cn(variants({ className }))}>
      <Menu size="24" />
      <input ref={ref} {...rest} type="text" className="mx-4 flex-grow bg-transparent focus-visible:outline-none" />
      <SearchIcon size="24" />
    </div>
  )
})

Search.displayName = 'Actify.Search'

export default Search
