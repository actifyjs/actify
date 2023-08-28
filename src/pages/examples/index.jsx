export default () => {
  return (
    <div>
      <ul className="w-full grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="h-28 cursor-pointer rounded-md bg-secondary text-on-secondary grid place-content-center"
          >
            item {i + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}
