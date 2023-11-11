import BarChart from '@/src/components/BarChart'
import { Card, Divider, Chip, Icon, Tabs } from 'actify'

export default () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const data = [
    {
      label: 'Actify',
      value: 'actify',
      content: [...Array(12)].map((_) => random(100, 320))
    },
    {
      label: 'Tailwind CSS',
      value: 'tailwind',
      content: [...Array(12)].map((_) => random(100, 320))
    }
  ]

  return (
    <div className="flex flex-col p-4 gap-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((i) => (
          <Card key={i} className="bg-surface">
            <p className="flex justify-between items-center p-2">
              <span className="text-2xl font-semibold">Lorem</span>
              <Chip label="label" className="h-6" />
            </p>
            <Divider />
            <div className="text-xl font-medium p-4 gap-4 grid grid-rows-2 grid-cols-2 place-items-center">
              <div>$2,000</div>
              <div className="bg-primary rounded-full w-10 h-10 grid place-content-center">
                <Icon name="bird" size={32} />
              </div>

              <div>total</div>
              <p>$5,000</p>
            </div>
          </Card>
        ))}
      </section>
      <Tabs value="actify" className="bg-surface rounded-xl">
        <Tabs.Header className="rounded-b-none bg-secondary/20">
          {data.map(({ label, value }) => (
            <Tabs.Tab key={value} value={value}>
              {label}
            </Tabs.Tab>
          ))}
        </Tabs.Header>
        <Tabs.Body className="p-2">
          {data.map(({ value, content }) => (
            <Tabs.Panel key={value} value={value}>
              <BarChart data={content} />
            </Tabs.Panel>
          ))}
        </Tabs.Body>
      </Tabs>
    </div>
  )
}
