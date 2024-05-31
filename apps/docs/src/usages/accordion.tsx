import { Accordion, Icon } from 'actify'

export default () => {
  return (
    <Accordion open={[, true]}>
      <Accordion.Item>
        <Accordion.Header>Overview</Accordion.Header>
        <Accordion.Content>
          Welcome to Actify, an open-source React Components Library designed to
          accelerate your React application development. Actify leverages
          TypeScript, Tailwind CSS, Floating-UI, Framer Motion, Material Design
          3, and more to provide a comprehensive set of modern and customizable
          UI components.
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
            <p className="text-2xl font-bold">What is Actify?</p>
            <div className="transition-transform duration-300">
              <Icon>keyboard_arrow_down</Icon>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Content>
          Actify is an open source react component library written in Vite +
          React + Tailwind CSS based on Google's Material Design 3. Highly
          inspired by Vuetify. You can use it for write react pages.
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
                <p>Why Actify?</p>
                <div
                  className={`transition-transform duration-300 ${
                    active ? 'rotate-90' : 'rotate-0'
                  }`}
                >
                  <Icon>keyboard_arrow_down</Icon>
                </div>
              </div>
            )
          }
        </Accordion.Header>
        <Accordion.Content>
          Actify is a powerful React Component Library built from the ground up
          to be easy to learn and rewarding to master. Our collection of UI
          components maintain a consistent style throughout your application
          with enough customization options to meet any use-case.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
