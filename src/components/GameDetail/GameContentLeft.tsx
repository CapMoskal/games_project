import { TGameDetail } from '../../store/detail/detail-types'
import { GameBtns } from './Buttons/GameBtns'
import { GameExtraInfo } from './ExtraInfo/GameExtraInfo'
import { GameAbout } from './GameAbout'

import { GameInfo } from './GameInfo'
import { GameTops } from './GameTops'

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
      {/* <GameTops /> */}
      <GameAbout description={game.description} />
      <GameExtraInfo
        platforms={game.platforms}
        metacritic={game.metacritic}
        genres={game.genres}
        developers={game.developers}
        publichers={game.publichers}
        esrb_raiting={game.esrb_raiting}
        tags={game.tags}
      />
    </div>
  )
}
