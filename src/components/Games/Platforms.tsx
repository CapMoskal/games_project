import { ParentPlatformType } from '../../types/ParentPlatformsType'
import { PlatformIcon } from './PlatformIcon'

type Props = {
  platforms: ParentPlatformType[]
  extra: boolean
}

export const Platforms = ({ platforms, extra }: Props) => {
  return (
    <div className="platforms-icons">
      {platforms?.map((elem, index) => {
        {
          if (index < 3) {
            return (
              <PlatformIcon
                key={elem.platform.id}
                platform={elem.platform.name}
              />
            )
          } else if (index === 3) {
            return extra ? (
              <p key="plus">+{platforms.length - index}</p>
            ) : null
          }
        }
      })}
    </div>
  )
}
