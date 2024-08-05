import { useGamesList } from '../hooks/useAllGamesList'
import { Filters } from '../components/Filters'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { GamesRender } from '../components/GamesRender'
import { useFilterParams } from '../hooks/useFilterParams'
import { usePastDate } from '../hooks/usePastDate'

export const LastWeekGames = () => {
  const { error, status, games } = useGamesList()
  const date = usePastDate(7)
  useFilterParams(date)

  return (
    <div className="games-n-filters">
      <div className="filters-con">
        <Filters order platforms />
      </div>
      <>
        {status === 'loading' && (
          <Spin
            indicator={
              <LoadingOutlined style={{ color: '#f0f0f0' }} />
            }
          />
        )}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <div className="games">
            {games.length === 0 ? (
              <h1>Nothing</h1>
            ) : (
              <GamesRender title="Last Week" games={games} />
            )}
          </div>
        )}
      </>
    </div>
  )
}
