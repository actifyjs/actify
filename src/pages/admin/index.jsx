import BarChart from '@/src/components/BarChart'
import { Card, Divider, Chip, Icon, Tabs } from 'actify'

export default () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const barData = [
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
  const cardData = [
    {
      title: 'lorem',
      total: '2,000',
      content: 'month',
      icon: 'badge-dollar-sign'
    },
    {
      title: 'ipsum',
      total: '3,000',
      content: 'month',
      icon: 'fan'
    },
    {
      title: 'dolor',
      total: '5,000',
      content: 'month',
      icon: 'atom'
    },
    {
      title: 'sit',
      total: '3,000',
      content: 'month',
      icon: 'lollipop'
    }
  ]

  return (
    <div className="flex flex-col p-4 gap-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((item, index) => (
          <Card key={index} className="bg-surface">
            <div className="flex justify-between items-center p-2">
              <span className="text-2xl font-semibold">{item.title}</span>
              <Chip label="month" className="h-6" />
            </div>
            <Divider />
            <div className="text-xl font-medium p-4 gap-4 grid grid-rows-2 grid-cols-2 place-items-center">
              <div>${item.total}</div>
              <div className="bg-primary rounded-full w-10 h-10 grid place-content-center">
                <Icon name={item.icon} size={32} />
              </div>
              <div>total</div>
              <p>$5,000</p>
            </div>
          </Card>
        ))}
      </section>
      <Tabs value="actify" className="bg-surface rounded-xl">
        <Tabs.Header className="rounded-b-none bg-secondary/20">
          {barData.map(({ label, value }) => (
            <Tabs.Tab key={value} value={value}>
              {label}
            </Tabs.Tab>
          ))}
        </Tabs.Header>
        <Tabs.Body className="p-2">
          {barData.map(({ value, content }) => (
            <Tabs.Panel key={value} value={value}>
              <BarChart data={content} />
            </Tabs.Panel>
          ))}
        </Tabs.Body>
      </Tabs>
    </div>
  )
}
