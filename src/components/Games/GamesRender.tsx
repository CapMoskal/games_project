import { Game } from '../../types'

import { GameCard } from './GameCard'

type Props = {
  games: Game[]
  title: string
}

export const GamesRender = ({ games, title }: Props) => (
  <>
    <h1 className="games-title">{title}</h1>
    <div className="games-layout">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  </>
)
