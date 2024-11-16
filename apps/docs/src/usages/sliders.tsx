import { Slider } from 'actify'

export default () => {
  return (
    <>
      <Slider labeled className="w-full" label="Opacity" defaultValue={66} />
      <Slider
        labeled
        className="w-full"
        label="Range Price"
        defaultValue={[20, 50]}
        formatOptions={{ style: 'currency', currency: 'USD' }}
      />
      <Slider
        labeled
        step={0.1}
        minValue={35}
        maxValue={38}
        defaultValue={36.5}
        orientation="vertical"
        label="Body Temperature"
      />
    </>
  )
}
