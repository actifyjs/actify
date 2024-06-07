import { ListGroup, ListItem } from 'actify'

import NavLink from './NavLink'

const GettingStarted = () => {
  return (
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
      <NavLink
        href="/getting-started/icons"
        className={({ isActive }) =>
          isActive ? 'block text-primary bg-surface-container-high' : ''
        }
      >
        <ListItem>Icon</ListItem>
      </NavLink>
    </ListGroup>
  )
}

export default GettingStarted
