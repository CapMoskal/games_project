import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'

import { useGameDetail } from '../hooks/useGameDetail'
import { GameContent } from '../components/GameDetail/GameContent'
import { Loading } from '../components/Games/Loading'
import { useScrollToTop } from '../hooks/useScrollToTop'

export const GameDetail = () => {
  useScrollToTop()

  const { id } = useParams()
  const { game, screenshots, status, error } = useSelector(
    (state: RootState) => state.details
  )
  useGameDetail(id)

  return (
    <div className="game-page">
      {error && <h1>Error</h1>}
      {status === 'loading' && <Loading />}
      {status === 'received' && (
        <>
          <div
            className="game-page--background-img"
            style={{
              backgroundImage: `url(${game.background_image})`,
            }}
          ></div>
          <GameContent game={game} screenshots={screenshots} />
        </>
      )}
    </div>
  )
}
