import { Game } from '../types/GameType'

import { useAllGamesList } from '../hooks/useAllGamesList'

import { MetacriticRaiting } from './MetacriticRaiting'
import { Platforms } from './Platforms'

import {
  GiftOutlined,
  HeartOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'

export const AllGamesList = () => {
  const { error, status, games } = useAllGamesList()
  if (games.length > 0) {
    console.log(games[0])
  }

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
                    <Platforms platforms={game.parent_platforms} />
                  </div>
                  <MetacriticRaiting raiting={game.metacritic} />
                </div>
                <h4>{game.name}</h4>
                <div className="game-con--btns">
                  {/* добавить логику, если игра уже в моей библиотеке, 
                  то будет один значок, если игра не добавлена, то другой */}
                  {/* Также с другими значками  */}
                  {/* подумать какие кнопки должны быть */}
                  {/* <HeartOutlined className="game-con--btns--item" /> */}
                  <PlusCircleOutlined className="game-con--btns--item" />
                  <GiftOutlined className="game-con--btns--item" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
