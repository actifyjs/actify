import React from 'react'

export interface AvatarProps extends React.ComponentProps<'img'> {}

const Avatar = (props: AvatarProps) => {
  const { alt, src, ...rest } = props

  return (
    <img
      {...rest}
      alt={alt || 'avatar'}
      src={src || 'https://avatars.githubusercontent.com/u/15228321?v=4'}
    />
  )
}

Avatar.displayName = 'Actify.Avatar'

export { Avatar }
