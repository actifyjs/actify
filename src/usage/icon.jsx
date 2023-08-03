import { Icon } from '@/packages/components'

export default (props) => {
  const { icon, name, ...rest } = props
  return <Icon name={icon} {...rest} />
}
