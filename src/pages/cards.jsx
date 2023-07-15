import Card from '@/packages/components/Cards'
import Button from '@/packages/components/Button'

export default () => {
  return (
    <div className="flex flex-col">
      <Card color="primary" variant="filled">
        <p>filled primary card</p>
        <div className="flex justify-end">
          <Button variant="tonal">Get started</Button>
        </div>
      </Card>
      <Card color="secondary" variant="filled">
        <p>filled secondary card</p>
        <div className="flex justify-end">
          <Button variant="tonal">Get started</Button>
        </div>
      </Card>
      <Card variant="elevated" color="tertiary">
        <p>elevated tertiary card</p>
        <div className="flex justify-end">
          <Button>Get started</Button>
        </div>
      </Card>
      <Card variant="outlined" color="error">
        <p>outlined error card</p>
        <div className="flex justify-end">
          <Button>Get started</Button>
        </div>
      </Card>
    </div>
  )
}
