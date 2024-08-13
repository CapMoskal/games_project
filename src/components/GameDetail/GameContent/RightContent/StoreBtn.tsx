import { platformIcons } from '../../../../icons/getPlatformIcon'

interface Props {
  domain: string
  name: string
}

export const StoreBtn = ({ domain, name }: Props) => {
  const iconSrc = platformIcons[name]

  return (
    <>
      <a
        className="game-store-btn"
        href={`https://${domain}`}
        target="_blank"
      >
        {name}
        <img src={iconSrc} className="store-icon" />
      </a>
    </>
  )
}
