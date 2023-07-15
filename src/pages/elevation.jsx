import Elevation from '@/packages/components/Elevation'

export default () => {
  const count = Array.from(Array(11).keys())
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {count.map((item) => (
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-success duration-200 ease-in-out">
          {item}
          <Elevation level={item} />
        </div>
      ))}
    </div>
  )
}
