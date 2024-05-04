'use client'

import NavLink from './NavLink'
import { tv } from 'tailwind-variants'
import { List, ListItem, ListGroup } from 'actify'

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

const base = tv({
  base: [
    'fixed',
    'z-40',
    'left-0',
    'top-16',
    'w-60',
    'bottom-0',
    'shadow-inner',
    'bg-surface',
    'translate-x-0',
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
              isActive
                ? 'block text-on-inverse-surface bg-inverse-surface/75'
                : ''
            }
          >
            <ListItem>Installation</ListItem>
          </NavLink>
          <NavLink
            href="/getting-started/theme"
            className={({ isActive }) =>
              isActive
                ? 'block text-on-inverse-surface bg-inverse-surface/75'
                : ''
            }
          >
            <ListItem>Theme</ListItem>
          </NavLink>
          <NavLink
            href="/getting-started/icons"
            className={({ isActive }) =>
              isActive
                ? 'block text-on-inverse-surface bg-inverse-surface/75'
                : ''
            }
          >
            <ListItem>Icons</ListItem>
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
                      ? 'block text-on-inverse-surface bg-inverse-surface/75'
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
                isActive
                  ? 'block text-on-inverse-surface bg-inverse-surface/75'
                  : ''
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
