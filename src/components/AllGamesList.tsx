import { Game } from '../types/GameType'
import { useAllGamesList } from '../hooks/useAllGamesList'

export const AllGamesList = () => {
  const { error, status, games } = useAllGamesList()

  return (
    <div>
      {status && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      {status === 'received' && (
        <div>
          <h1>Popular Games</h1>
          <ol className="popular-games-con">
            {games.map((game: Game) => (
              <li key={game.id} className="popular-games-con--item">
                <h3>{game.name}</h3>
                {game.background_image && (
                  <img
                    className="popular-games-con--item-img"
                    src={game.background_image}
                    alt={game.name}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}
