import { Accordion } from 'actify'
import { ArrowDown, ChevronDown } from 'lucide-react'

export default () => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>What is Actify?</Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus recusandae ullam, repudiandae aut odio mollitia
          possimus ut eaque corporis voluptas et non deleniti ratione laudantium
          qui impedit at ab labore? dreams.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header asChild>
          <div
            // @ts-expect-error
            className={({ active }) =>
              `font-black cursor-pointer flex items-center justify-between ${
                active ? 'text-error [&>div]:rotate-90' : '[&>div]:rotate-0'
              }`
            }
          >
            <p className="text-2xl font-bold">get active from className</p>
            <div className="transition-transform duration-300">
              <ChevronDown strokeWidth={4} />
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          dolor laborum tempore quam ea illum nemo necessitatibus debitis natus
          nesciunt nihil adipisci, quisquam, possimus illo consequatur eos
          excepturi rerum ratione.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header asChild>
          {
            // @ts-expect-error
            ({ active }) => (
              <div
                className={
                  active
                    ? 'text-purple-500 flex items-center justify-between'
                    : 'flex items-center justify-between'
                }
              >
                <p>rewrite the whole block</p>
                <div
                  className={`transition-transform duration-300 ${
                    active ? 'rotate-90' : 'rotate-0'
                  }`}
                >
                  <ArrowDown strokeWidth={4} />
                </div>
              </div>
            )
          }
        </Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus recusandae ullam, repudiandae aut odio mollitia
          possimus ut eaque corporis voluptas et non deleniti ratione laudantium
          qui impedit at ab labore? dreams.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
