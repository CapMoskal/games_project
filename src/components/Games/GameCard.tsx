import { NavLink } from 'react-router-dom'
import { Game } from '../../types'

import { GameCardBtns } from './GameCardBtns'
import { GameCardExtra } from './GameCardExtra'
import { GameCardInfo } from './GameCardInfo'

interface Props {
  game: Game
}

export const GameCard = ({ game }: Props) => (
  <div className="game-con">
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
      <div className="game-card-title-con">
        <NavLink to={`/${game.id}`} className="game-card--title">
          {game.name}
        </NavLink>
      </div>
      <GameCardBtns game={game} />
      <GameCardExtra released={game.released} genres={game.genres} />
    </div>
  </div>
)
