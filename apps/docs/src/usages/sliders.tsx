import { Slider } from 'actify'

export default () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Slider labeled label="Opacity" defaultValue={66} />
        <Slider
          labeled
          label="Range Price"
          defaultValue={[20, 50]}
          formatOptions={{ style: 'currency', currency: 'USD' }}
        />
      </div>
      <Slider
        labeled
        step={0.1}
        minValue={35}
        maxValue={38}
        defaultValue={36.5}
        orientation="vertical"
        label="Body Temperature"
      />
    </div>
  )
}
