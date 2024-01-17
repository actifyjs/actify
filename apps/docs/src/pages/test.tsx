const Menu = ({ children }) => {
  return <div>{children}</div>
}

type ActivatorProps = {
  asChild?: boolean
  children: React.ReactNode
}
Menu.Activator = ({ asChild, children }: ActivatorProps) => {
  return <div>{children}</div>
}

export default function Test() {
  return (
    <Menu>
      <Menu.Activator>激活器</Menu.Activator>
    </Menu>
  )
}
