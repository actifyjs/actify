import { Camera, Home, Wifi, Plus } from 'lucide-react'
import Elevation from '@/packages/components/Elevation'

const BottomAppBar = () => {
  return (
    <div className="relative flex h-20 items-center justify-between bg-primary px-4">
      <div className="flex gap-2 [&_*]:cursor-pointer">
        <Home color="white" size={24} />
        <Camera color="white" size={24} />
        <Wifi color="white" size={24} />
      </div>
      <div className="h-14 w-14 cursor-pointer rounded-2xl bg-white/20 p-4">
        <Plus color="white" size={24} />
      </div>
      <Elevation level={2} />
    </div>
  )
}

BottomAppBar.displayName = 'Actify.BottomAppBar'

export default BottomAppBar
