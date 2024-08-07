import { ParentPlatformType } from '../../types/ParentPlatformsType'
import { PlatformIcon } from './PlatformIcon'

type Props = {
  platforms: ParentPlatformType[]
}

export const Platforms = ({ platforms }: Props) => {
  return platforms.map((elem, index) => {
    {
      if (index < 3) {
        return (
          <PlatformIcon
            key={elem.platform.name}
            platform={elem.platform.name}
          />
        )
      } else if (index === 3) {
        return <p key="plus">+{platforms.length - index}</p>
      }
    }
  })
}
