import { tv } from 'tailwind-variants'
import { List, ListItemLink, ListGroup } from 'actify'

const components = [
  {
    label: 'App bars',
    children: [
      {
        name: 'Bottom app bar'
      },
      {
        name: 'Top app bar'
      }
    ]
  },
  {
    name: 'Badges'
  },
  {
    label: 'Buttons',
    children: [
      {
        name: 'Button'
      },
      {
        name: 'FAB'
      },
      {
        name: 'Icon button'
      },
      {
        name: 'Segmented button'
      }
    ]
  },
  {
    name: 'Cards'
  },
  {
    name: 'Swiper'
  },
  {
    name: 'Carousel'
  },
  {
    name: 'Checkbox'
  },
  {
    name: 'Chips'
  },
  {
    name: 'Date pickers'
  },
  {
    name: 'Time pickers'
  },
  {
    name: 'Dialogs'
  },
  {
    name: 'Popover'
  },
  {
    name: 'Divider'
  },
  {
    name: 'Lists'
  },
  {
    name: 'Menus'
  },
  {
    name: 'Select'
  },
  {
    label: 'Navigation',
    children: [
      {
        name: 'Navigation bar'
      },
      {
        name: 'Navigation drawer'
      },
      {
        name: 'Navigation rail'
      }
    ]
  },
  {
    label: 'Progress',
    children: [
      {
        name: 'Linear progress'
      },
      {
        name: 'Circular progress'
      }
    ]
  },
  {
    name: 'Radio button'
  },
  {
    label: 'Sheets',
    children: [
      {
        name: 'Bottom sheets'
      },
      {
        name: 'Side sheets'
      }
    ]
  },
  {
    name: 'Sliders'
  },
  {
    name: 'Snackbar'
  },
  {
    name: 'Toast'
  },
  {
    name: 'Switch'
  },
  {
    name: 'Tabs'
  },
  {
    name: 'Table'
  },
  {
    name: 'Avatar'
  },
  {
    name: 'Pagination'
  },
  {
    name: 'Accordion'
  },
  {
    name: 'Text fields'
  },
  {
    name: 'Tooltips'
  },
  {
    name: 'Terminal'
  },
  {
    name: 'Before After'
  }
]

const spaces2Hyphen = (str: string) => str.toLowerCase().split(' ').join('-')

const variants = tv({
  base: 'fixed top-0 h-screen bg-surface overflow-y-auto row-start-2 row-end-4 col-start-1 col-end-2 shadow'
})

export default function Aside({ className }: { className: string }) {
  return (
    <aside className={variants({ className })}>
      <List>
        <ListGroup label="Getting started">
          <ListItemLink to="/getting-started/installation">
            Installation
          </ListItemLink>
          <ListItemLink to="/getting-started/theme">Theme</ListItemLink>
          <ListItemLink to="/getting-started/icons">Icons</ListItemLink>
        </ListGroup>
        {components.map((component, index) =>
          component.children ? (
            <ListGroup key={index} label={component.label}>
              {component.children.map((child, index) => (
                <ListItemLink
                  key={index}
                  to={
                    `/components/${spaces2Hyphen(component.label)}/` +
                    child.name.toLowerCase().split(' ').join('-')
                  }
                >
                  {child.name}
                </ListItemLink>
              ))}
            </ListGroup>
          ) : (
            <ListItemLink
              key={index}
              to={'/components/' + spaces2Hyphen(component.name)}
            >
              {component.name}
            </ListItemLink>
          )
        )}
      </List>
    </aside>
  )
}
