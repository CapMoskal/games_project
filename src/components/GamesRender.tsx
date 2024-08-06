import { GiftOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Game, useAppDispatch } from '../types'
import { MetacriticRaiting } from './MetacriticRaiting'
import { Platforms } from './Platforms'
import { addGame } from '../store/my-library/my-library-actions'

type Props = {
  games: Game[]
  title: string
}

export const GamesRender = ({ games, title }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <h1 className="games-title">{title}</h1>
      <div className="games-layout">
        {games.map((game: Game) => (
          <div key={game.id} className="game-con">
            <div className="game-card">
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
                <PlusCircleOutlined
                  onClick={() => {
                    dispatch(addGame(game))
                  }}
                  className="game-card--btns--item"
                />
                <GiftOutlined className="game-card--btns--item" />
              </div>
              <div className="game-card-extra">
                <div className="game-card-extra--info">
                  <h5 className="game-card-extra--info-title">
                    Released:
                  </h5>
                  <h5 className="game-card-extra--info-release">
                    {game.released}
                  </h5>
                </div>
                <ul className="game-card-extra--info">
                  <h5 className="game-card-extra--info-title">
                    Genres:
                  </h5>
                  <div className="game-card-extra--info-genres">
                    {game.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="game-card-extra--info-genres--item"
                      >
                        {genre.name}
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
