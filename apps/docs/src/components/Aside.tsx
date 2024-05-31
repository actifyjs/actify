'use client'

import { List, ListGroup, ListItem } from 'actify'

import NavLink from './NavLink'
import { tv } from 'tailwind-variants'

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
    name: 'Accordion'
  },
  {
    name: 'Avatar'
  },
  {
    name: 'Badges'
  },
  {
    name: 'Before After'
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
    name: 'Carousel'
  },
  {
    name: 'Checkbox'
  },
  {
    name: 'Chips'
  },
  {
    name: 'Dialogs'
  },
  {
    name: 'Divider'
  },
  {
    name: 'Focus Ring'
  },
  {
    name: 'Swiper'
  },
  {
    name: 'Lists'
  },
  {
    name: 'Menus'
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
    name: 'Pagination'
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
    name: 'Ripple'
  },
  {
    name: 'Select'
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
    name: 'Switch'
  },
  {
    name: 'Tabs'
  },
  {
    name: 'Table'
  },
  {
    name: 'Text fields'
  },
  {
    name: 'Terminal'
  },
  {
    name: 'Tooltips'
  }
]

const spaces2Hyphen = (str: string) => str.toLowerCase().split(' ').join('-')

const base = tv({
  base: [
    'fixed',
    'z-40',
    'left-0',
    'top-16',
    'w-60',
    'bottom-0',
    'bg-surface',
    'shadow-inner',
    'translate-x-0',
    'text-on-surface',
    'overflow-x-hidden',
    'overflow-y-scroll',
    'transition-transform',
    'max-md:-translate-x-full',
    'h-[calc(100%_-_64px_-_56px)]'
  ],
  variants: {
    open: {
      true: ['!static', '!translate-x-0', '!h-full'],
      false: ''
    }
  }
})

interface AsideProps extends React.ComponentProps<'aside'> {
  open?: boolean
}

export default function Aside({ open, className }: AsideProps) {
  return (
    <aside className={base({ open, className })}>
      <List>
        <ListGroup label="Getting started">
          <NavLink
            href="/getting-started/installation"
            className={({ isActive }) =>
              isActive ? 'block text-primary bg-surface-container-high' : ''
            }
          >
            <ListItem>Installation</ListItem>
          </NavLink>
          <NavLink
            href="/getting-started/theme"
            className={({ isActive }) =>
              isActive ? 'block text-primary bg-surface-container-high' : ''
            }
          >
            <ListItem>Theme</ListItem>
          </NavLink>
        </ListGroup>
        {components.map((component, index) =>
          component.children ? (
            <ListGroup key={index} label={component.label}>
              {component.children.map((child, index) => (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-primary bg-surface-container-high'
                      : ''
                  }
                  href={
                    `/components/${spaces2Hyphen(component.label)}/` +
                    child.name.toLowerCase().split(' ').join('-')
                  }
                >
                  <ListItem>{child.name}</ListItem>
                </NavLink>
              ))}
            </ListGroup>
          ) : (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? 'block text-primary bg-surface-container-high' : ''
              }
              href={'/components/' + spaces2Hyphen(component.name)}
            >
              <ListItem>{component.name}</ListItem>
            </NavLink>
          )
        )}
      </List>
    </aside>
  )
}
