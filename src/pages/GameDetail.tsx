import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'

import { useGameDetail } from '../hooks/useGameDetail'
import { GameDetail } from '../components/GameDetail/GameDetail'

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
      <GameDetail game={game} screenshots={screenshots} />
    </div>
  )
}
