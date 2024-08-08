import { ParentPlatformType } from '../../types/ParentPlatformsType'
import { Platforms } from '../Games/Platforms'

interface Props {
  released: string
  platforms: ParentPlatformType[]
  playtime: number
  name_original: string
}

export const GameInfo = ({
  released,
  platforms,
  playtime,
  name_original,
}: Props) => {
  return (
    <div className="game-page--content-left-info">
      <div className="content-left-info--mini">
        <span className="mini-released">{released}</span>
        <Platforms extra={false} platforms={platforms} />
        <p className="mini-playtime">
          average playtime: {playtime} hours
        </p>
      </div>
      <h1 className="content-left-info-title">{name_original}</h1>
    </div>
  )
}
