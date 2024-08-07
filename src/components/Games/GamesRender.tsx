import { Game } from '../../types'

import { GameCardInfo } from './GameCardInfo'
import { GameCardBtns } from './GameCardBtns'
import { GameCardExtra } from './GameCardExtra'

type Props = {
  games: Game[]
  title: string
}

export const GamesRender = ({ games, title }: Props) => (
  <>
    <h1 className="games-title">{title}</h1>
    <div className="games-layout">
      {games.map((game: Game) => (
        // сделать отдельный компонент для рендера всех game-con
        <div key={game.id} className="game-con">
          <div className="game-card">
            <img
              className="game-card--img"
              src={game.background_image}
              alt={game.name}
            />
            <GameCardInfo
              platforms={game.parent_platforms}
              metacritic={game.metacritic}
            />
            <h4 className="game-card--title">{game.name}</h4>
            <GameCardBtns game={game} />
            <GameCardExtra
              released={game.released}
              genres={game.genres}
            />
          </div>
        </div>
      ))}
    </div>
  </>
)
