const platformIcons: { [key: string]: string } = {
  PC: 'src/icons/pc_icon_white.svg',
  Xbox: 'src/icons/xbox_icon_white.svg',
  PlayStation: 'src/icons/ps_icon_white.svg',
  Nintendo: 'src/icons/nintendo_icon_white.svg',
  'Apple Macintosh': 'src/icons/apple_icon_white.svg',
  Linux: 'src/icons/linux_icon_white.svg',
  Android: 'src/icons/android_icon_white.svg',
  iOS: 'src/icons/ios_icon_white.svg',
}

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
