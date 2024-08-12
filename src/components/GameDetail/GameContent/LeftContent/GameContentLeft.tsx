import {
  TDevelopers,
  TEsrbRating,
  TGameDetail,
  TTags,
} from '../../../../store/detail/detail-types'
import { Genre, Platform } from '../../../../types'

import { GameBtns } from './Buttons/GameBtns'
import { GameExtraInfo } from './ExtraInfo/GameExtraInfo'
import { GameAbout } from './GameAbout'
import { GameInfo } from './GameInfo'

interface Props {
  game: TGameDetail
}

export type TExtraInfo =
  | Genre[]
  | TDevelopers[]
  | TTags[]
  | Platform[]
  | number
  | string
  | TEsrbRating

export interface TExtraInfoObj {
  [key: string]: TExtraInfo
}

export const GameContentLeft = ({ game }: Props) => {
  const extraInfoObj: TExtraInfoObj = {
    Platforms: game.platforms,
    Metascore: game.metacritic,
    Genres: game.genres,
    'Released date': game.released,
    'Age Raiting': game.esrb_rating,
    Developers: game.developers,
    Tags: game.tags,
  }
  console.log(game.publichers)

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
      <GameExtraInfo extraInfoObj={extraInfoObj} />
    </div>
  )
}
