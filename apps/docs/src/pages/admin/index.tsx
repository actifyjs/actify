import BarChart from '@/components/admin/BarChart'
import SvgChart from '@/components/admin/SvgChart'
import PieChart from '@/components/admin/PieChart'
import { Card, Divider, Chip, Tabs, Button } from 'actify'
import { BadgeDollarSign, Fan, Atom, Lollipop } from 'lucide-react'

export default () => {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
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
      icon: <BadgeDollarSign />
    },
    {
      title: 'ipsum',
      total: '3,000',
      content: 'month',
      icon: <Fan />
    },
    {
      title: 'dolor',
      total: '5,000',
      content: 'month',
      icon: <Atom />
    },
    {
      title: 'sit',
      total: '3,000',
      content: 'month',
      icon: <Lollipop />
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
                {item.icon}
              </div>
              <div>total</div>
              <p>$5,000</p>
            </div>
          </Card>
        ))}
      </section>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
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
        <div className="rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="p-2 h-14 text-black bg-secondary/20">
            <Button variant="text" className="text-on-surface">
              Latest
            </Button>
          </div>
          <div className="rounded-b-xl bg-surface p-2 w-full grow">
            <SvgChart className="overflow-hidden rounded-xl bg-surface p-2 h-full" />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="p-2 h-14 text-black bg-secondary/20">
            <Button variant="text" className="text-on-surface">
              Framework
            </Button>
          </div>
          <div className="rounded-b-xl bg-surface p-2 w-full grow grid place-content-center">
            <PieChart
              items={[
                { value: 500, className: 'fill-primary' },
                { value: 300, className: 'fill-secondary' },
                { value: 200, className: 'fill-tertiary' },
                { value: 100, className: 'fill-error' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
