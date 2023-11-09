import { Accordion } from 'actify'

export default () => {
  return (
    <Accordion open={[, true]}>
      <Accordion.Item>
        <Accordion.Header>What is Actify?</Accordion.Header>
        <Accordion.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          dolor laborum tempore quam ea illum nemo necessitatibus debitis natus
          nesciunt nihil adipisci, quisquam, possimus illo consequatur eos
          excepturi rerum ratione.
        </Accordion.Content>
      </Accordion.Item>
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
        <Accordion.Header>What is Actify?</Accordion.Header>
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
