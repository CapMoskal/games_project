import { GiftOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Game } from '../types'
import { MetacriticRaiting } from './MetacriticRaiting'
import { Platforms } from './Platforms'

type Props = {
  games: Game[]
}

export const GamesRender = ({ games }: Props) => {
  return (
    <>
      <h1 className="games-title">All Games</h1>
      <div className="games-layout">
        {games.map((game: Game) => (
          <div key={game.id} className="game-card">
            <img
              className="game-card--img"
              src={game.background_image}
              alt={game.name}
            />
            <div className="game-card-info">
              <div className="game-card-info--platforms">
                <Platforms platforms={game.parent_platforms} />
              </div>
              <MetacriticRaiting raiting={game.metacritic} />
            </div>
            <h4 className="game-card--title">{game.name}</h4>
            <div className="game-card--btns">
              {/* добавить логику, если игра уже в моей библиотеке, 
                  то будет один значок, если игра не добавлена, то другой */}
              {/* Также с другими значками  */}
              {/* подумать какие кнопки должны быть */}
              {/* <HeartOutlined className="game-card--btns--item" /> */}
              <PlusCircleOutlined className="game-card--btns--item" />
              <GiftOutlined className="game-card--btns--item" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
