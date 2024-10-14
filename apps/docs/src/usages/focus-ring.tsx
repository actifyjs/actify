import { FocusRing, useFocusRing } from 'actify'

export default () => {
  const { isFocused, focusProps } = useFocusRing()
  return (
    <span className="relative">
      <input {...focusProps} className="outline-none text-primary" />
      {isFocused && <FocusRing />}
    </span>
  )
}
