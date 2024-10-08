import { useScrollToTop } from '../../hooks/useScrollToTop'
import { Game } from '../../types'
import { GamesRender } from './GamesRender'
import { Nothing } from './Nothing'

interface Props {
  title: string
  games: Game[]
}

export const Games = ({ title, games }: Props) => {
  useScrollToTop()

  return (
    <div className="games">
      {games.length === 0 ? (
        <Nothing />
      ) : (
        <GamesRender title={title} games={games} />
      )}
    </div>
  )
}
