import { TGameDetail } from '../../store/detail/detail-types'
import { GameBtns } from './Buttons/GameBtns'

import { GameInfo } from './GameInfo'

interface Props {
  game: TGameDetail
}

export const GameContentLeft = ({ game }: Props) => {
  return (
    <div className="game-page--content-left">
      <GameInfo
        released={game.released}
        platforms={game.platforms}
        playtime={game.playtime}
        name_original={game.name_original}
      />
      <GameBtns game={game} />
    </div>
  )
}
