import { platformIcons } from '../../icons/getPlatformIcon'

interface Props {
  platform: string
}

export const PlatformIcon = ({ platform }: Props) => {
  const iconSrc = platformIcons[platform]

  return (
    <img
      src={iconSrc}
      alt={platform}
      style={{
        width: 24,
        height: 24,
        marginRight: 8,
      }}
    />
  )
}
