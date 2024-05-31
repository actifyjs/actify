import { FocusRing } from 'actify'
import { useId } from 'react'

export default () => {
  const id = useId()
  return (
    <span className="relative">
      <FocusRing id={id} />
      <input className="outline-none text-primary" id={id} />
    </span>
  )
}
