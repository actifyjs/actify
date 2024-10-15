import { Slider } from 'actify'

export default () => {
  return (
    <>
      <Slider label="Opacity" labeled defaultValue={50} className="w-full" />
      <Slider label="Volume" labeled defaultValue={50} orientation="vertical" />
    </>
  )
}
