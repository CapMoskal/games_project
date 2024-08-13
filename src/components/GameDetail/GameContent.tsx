import {
  TGameDetail,
  TScreenshotsResponse,
} from '../../store/detail/detail-types'
import { GameContentLeft } from './GameContent/LeftContent/GameContentLeft'
import { GameContentRight } from './GameContent/RightContent/GameContentRight'

interface Props {
  game: TGameDetail
  screenshots: TScreenshotsResponse
}

export const GameContent = ({ game, screenshots }: Props) => {
  return (
    <div className="game-page--content">
      <GameContentLeft game={game} />
      <GameContentRight
        stores={game.stores}
        screenshots={screenshots.results}
      />
    </div>
  )
}
