import {
  TDevelopers,
  TEsrbRating,
  TGameDetail,
  TPublishers,
  TTags,
} from '../../store/detail/detail-types'

import { GameInfo } from './GameInfo'
import { GameBtns } from './Buttons/GameBtns'
import { GameAbout } from './GameAbout'
import { GameExtraInfo } from './ExtraInfo/GameExtraInfo'
import { Genre, Platform } from '../../types'

interface Props {
  game: TGameDetail
}

export type TExtraInfo =
  | Genre[]
  | TDevelopers[]
  | TPublishers[]
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
    Developers: game.developers,
    Publishers: game.publichers,
    Tags: game.tags,

    'Age Raiting': game.esrb_rating,

    'Released date': game.released,
  }

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
