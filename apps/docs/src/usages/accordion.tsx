import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Icon
} from 'actify'

export default () => {
  return (
    <Accordion open={[, true]}>
      <AccordionItem>
        <AccordionHeader>Overview</AccordionHeader>
        <AccordionContent>
          Welcome to Actify, an open-source React Components Library designed to
          accelerate your React application development. Actify leverages
          TypeScript, Tailwind CSS, Floating-UI, Framer Motion, Material Design
          3, and more to provide a comprehensive set of modern and customizable
          UI components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader asChild>
          {({ active }) => (
            <div
              className={`text-2xl cursor-pointer ${
                active
                  ? 'text-error flex items-center justify-between'
                  : 'flex items-center justify-between'
              }`}
            >
              <p>What is Actify? (custom header style)</p>
              <div
                className={`transition-transform duration-300 ${
                  active ? 'rotate-90' : 'rotate-0'
                }`}
              >
                <Icon className="[--md-icon-size:36px]">arrow_downward</Icon>
              </div>
            </div>
          )}
        </AccordionHeader>
        <AccordionContent>
          Actify is an open source react component library written in Vite +
          React + Tailwind CSS based on Google's Material Design 3. Highly
          inspired by Vuetify. You can use it for write react pages.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Why Actify? (custom content style)</AccordionHeader>
        <AccordionContent asChild>
          {({ active }) => (
            <div
              className={`grid duration-300 grid-rows-[0fr] transition-[grid-template-rows] ${active ? 'grid-rows-[1fr]' : ''}`}
            >
              <p className="overflow-hidden text-2xl text-primary">
                Actify is a powerful React Component Library built from the
                ground up to be easy to learn and rewarding to master. Our
                collection of UI components maintain a consistent style
                throughout your application with enough customization options to
                meet any use-case.
              </p>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
