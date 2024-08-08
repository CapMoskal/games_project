import { TGameDetail } from '../../store/detail/detail-types'
import { GameDetailBtns } from './GameDetailBtns'

import { GameDetailInfo } from './GameDetailInfo'

interface Props {
  game: TGameDetail
}

export const GameDetailLeft = ({ game }: Props) => {
  return (
    <div className="game-page--content-left">
      <GameDetailInfo
        released={game.released}
        platforms={game.platforms}
        playtime={game.playtime}
        name_original={game.name_original}
      />
      <GameDetailBtns id={game.id} />
    </div>
  )
}
