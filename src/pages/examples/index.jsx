import Search from '@/packages/components/Search'
import TopAppBar from '@/packages/components/TopAppBar'
import BottomAppBar from '@/packages/components/BottomAppBar'

export default () => {
  return (
    <div className="flex flex-col gap-2">
      <TopAppBar title="TopAppBar" />
      <Search placeholder="search here" />
      <BottomAppBar />
    </div>
  )
}
