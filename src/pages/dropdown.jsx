import Dropdown from '@/packages/components/Dropdown'

export default () => {
  const items = ['Home', 'About', 'Contact']

  return (
    <div className="p-2">
      <Dropdown title="Dropdown Menu" items={items} className="w-64"></Dropdown>
    </div>
  )
}
