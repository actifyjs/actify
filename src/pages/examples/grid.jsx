export default () => {
  return (
    <div className="flex gap-2">
      <table className="w-full text-center text-4xl h-[calc(100vh-152px)]">
        <tr className="bg-primary h-16">
          <td colSpan={2}>Header</td>
        </tr>
        <tr>
          <td className="bg-secondary w-[240px]">Sidebar</td>
          <td className="bg-tertiary">Table Layout</td>
        </tr>
        <tr className="bg-error h-16">
          <td colSpan={2}>Footer</td>
        </tr>
      </table>
      <div className="w-full flex flex-col text-4xl text-center">
        <header className="bg-primary h-16">Header</header>
        <div className="flex grow">
          <aside className="w-[240px] bg-secondary grid place-content-center">
            Sidebar
          </aside>
          <main className="grow bg-tertiary grid place-content-center">
            Flex Layout
          </main>
        </div>
        <footer className="bg-error h-16">Footer</footer>
      </div>
      <div className="w-full grid h-[calc(100vh-152px)] grid-cols-[240px_auto] grid-rows-[64px_auto_64px] text-4xl">
        <header className="bg-primary col-span-2 grid place-content-center">
          Header
        </header>
        <aside className="bg-secondary grid place-content-center">
          Sidebar
        </aside>
        <main className="bg-tertiary grid place-content-center">
          Grid Layout
        </main>
        <footer className="bg-error col-span-2 grid place-content-center">
          Footer
        </footer>
      </div>
    </div>
  )
}
