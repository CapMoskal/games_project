import { ParentPlatformType } from '../../types/ParentPlatformsType'
import { MetacriticRaiting } from './MetacriticRaiting'
import { Platforms } from './Platforms'

interface Props {
  platforms: ParentPlatformType[]
  metacritic: number
}

export const GameCardInfo = ({ platforms, metacritic }: Props) => (
  <div className="game-card-info">
    <div className="game-card-info--platforms">
      <Platforms platforms={platforms} />
    </div>
    <MetacriticRaiting raiting={metacritic} />
  </div>
)
