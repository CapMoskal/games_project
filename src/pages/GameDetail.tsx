import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'

import { useGameDetail } from '../hooks/useGameDetail'

export const GameDetail = () => {
  const { id } = useParams()
  const { game, screenshots, status, error } = useSelector(
    (state: RootState) => state.details
  )
  useGameDetail(id)

  return (
    <div className="game-page">
      <div
        className="game-page--background-img"
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>
      <div className="game-page--content">
        <div className="game-page--content-left">
          <div className="game-apge--content-left-info">
            <h1>{game.name_original}</h1>
          </div>
        </div>
        <div className="game-page--content-right"></div>
      </div>
    </div>
  )
}
