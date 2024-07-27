import { Game } from '../types/GameType'
import { useAllGamesList } from '../hooks/useAllGamesList'

export const AllGamesList = () => {
  const { error, status, games } = useAllGamesList()
  console.log(games[0])

  return (
    <div>
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      {status === 'received' && (
        <div>
          <h1>Popular Games</h1>
          <div className="games-layout">
            {games.map((game: Game) => (
              <div key={game.id} className="game-con">
                <img
                  className="game-con--img"
                  src={game.background_image}
                  alt={game.name}
                />
                <div className="game-con-info">
                  <div className="game-con-info--platforms">
                    <p>
                      {game.platforms.map(
                        (elem) => elem.platform.img_background
                      )}
                    </p>
                  </div>
                  <p>{game.metacritic}</p>
                </div>
                <h3>{game.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
