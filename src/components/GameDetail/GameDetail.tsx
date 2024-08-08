import {
  TGameDetail,
  TScreenshotsResponse,
} from '../../store/detail/detail-types'
import { GameDetailLeft } from './GameDetailLeft'
import { GameDetailRight } from './GameDetailRight'

interface Props {
  game: TGameDetail
  screenshots: TScreenshotsResponse
}

export const GameDetail = ({ game, screenshots }: Props) => {
  return (
    <div className="game-page--content">
      <GameDetailLeft game={game} />
      <GameDetailRight screenshots={screenshots.results} />
    </div>
  )
}
