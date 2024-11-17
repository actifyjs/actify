import { Divider, TabItem, Tabs } from 'actify'

export default () => {
  return (
    <>
      <Tabs>
        <TabItem title="Actify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          harum commodi labore illo in est delectus ratione sed impedit expedita
          architecto molestias doloremque minus cupiditate nulla praesentium
          tenetur quos voluptatibus!
        </TabItem>
        <TabItem title="Ngroker">
          <img src="https://ngroker.com/screenshots/dark.png" alt="ngroker" />
        </TabItem>
        <TabItem title="Taildoor">
          <video
            loop
            controls
            autoPlay
            playsInline
            poster="https://taildoor.com/docs/poster.webp"
            className="w-full rounded-lg inline-block shadow-lg ring-0"
          >
            <source
              type="video/webm"
              src="https://taildoor.com/docs/taildoor.webm"
            />
          </video>
        </TabItem>
      </Tabs>

      <Divider inset />

      <Tabs orientation="vertical" contentClassName="p-4 bg-surface-variant">
        <TabItem title="Actify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum
          molestiae eos, deserunt eius atque quisquam voluptatum inventore
          corporis aspernatur quo facere numquam asperiores consequatur ab
          magnam maiores perferendis nesciunt?
        </TabItem>
        <TabItem title="Ngroker">
          <img src="https://ngroker.com/screenshots/dark.png" alt="ngroker" />
        </TabItem>
        <TabItem title="Taildoor">
          <video
            loop
            controls
            autoPlay
            playsInline
            poster="https://taildoor.com/docs/poster.webp"
            className="w-full rounded-lg inline-block shadow-lg ring-0"
          >
            <source
              type="video/webm"
              src="https://taildoor.com/docs/taildoor.webm"
            />
          </video>
        </TabItem>
      </Tabs>
    </>
  )
}
