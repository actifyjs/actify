import { Speaker } from 'lucide-react'
import { Chip, Icon } from 'actify'

export default () => {
  return (
    <>
      <p>Assist chips</p>
      <div className="flex gap-2">
        <Chip>
          <Chip.Item label="Assit chip" />
          <Chip.Item label="Assit chip with icon">
            <Icon>
              <Speaker />
            </Icon>
          </Chip.Item>
          <Chip.Item label="Assit link chip" href="https://actifyjs.com">
            <Icon>
              <svg
                fill="#fff"
                viewBox="0 0 33.455 36.987"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="2.5"
                  className="stroke-primary"
                  d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
                  transform="translate(-28.272 365)"
                />
              </svg>
            </Icon>
          </Chip.Item>
          <Chip.Item label="Disabled assit chip (focusable)" disabled />
        </Chip>
      </div>

      <p>Filter chips</p>
      <div className="flex gap-2">
        <Chip defaultSelected={[1]} onChange={(value) => console.log(value)}>
          <Chip.Item type="filter" label="Filter chip" />
          <Chip.Item type="filter" label="Filter chip with icon">
            <Icon>
              <Speaker />
            </Icon>
          </Chip.Item>
          <Chip.Item type="filter" removable label="Removable filter chip" />
          <Chip.Item
            type="filter"
            disabled
            removable
            label="Disabled filter chip (focusable)"
          />
        </Chip>
      </div>

      <p>Suggestion chips</p>
      <div className="flex gap-2">
        <Chip>
          <Chip.Item type="suggestion" label="Suggestion chip" />
          <Chip.Item type="suggestion" label="Suggestion chip with icon">
            <Icon>
              <Speaker />
            </Icon>
          </Chip.Item>
          <Chip.Item
            type="suggestion"
            label="Suggestion link chip"
            href="https://actifyjs.com"
          >
            <Icon>
              <svg
                fill="#fff"
                viewBox="0 0 33.455 36.987"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="2.5"
                  className="stroke-primary"
                  d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
                  transform="translate(-28.272 365)"
                />
              </svg>
            </Icon>
          </Chip.Item>
          <Chip.Item label="Disabled suggestion chip (focusable)" disabled />
        </Chip>
      </div>
    </>
  )
}
