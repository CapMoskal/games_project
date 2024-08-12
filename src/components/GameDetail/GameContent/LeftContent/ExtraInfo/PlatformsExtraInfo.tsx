import { Platform } from '../../../types'

interface Props {
  platforms: Platform[]
}

export const PlatformsExtraInfo = ({ platforms }: Props) => {
  return (
    <p className="game-page--extra-text">
      {platforms?.map((elem) => (
        <span className="extra-info--span" key={elem.platform.id}>
          {elem.platform.name}
        </span>
      ))}
    </p>
  )
}
