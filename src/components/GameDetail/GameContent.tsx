import {
  TGameDetail,
  TScreenshotsResponse,
} from '../../store/detail/detail-types'
import { GameContentLeft } from './GameContentLeft'
import { GameContentRight } from './GameContentRight'

interface Props {
  game: TGameDetail
  screenshots: TScreenshotsResponse
}

export const GameContent = ({ game, screenshots }: Props) => {
  return (
    <div className="game-page--content">
      <GameContentLeft game={game} />
      <GameContentRight screenshots={screenshots.results} />
    </div>
  )
}
