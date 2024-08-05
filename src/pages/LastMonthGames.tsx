import { useGamesList } from '../hooks/useAllGamesList'

import { Filters } from '../components/Filters'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { GamesRender } from '../components/GamesRender'
import { useFilterParams } from '../hooks/useFilterParams'

export const LastMonthGames = () => {
  const { error, status, games } = useGamesList()

  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const prevMonth = String(today.getMonth()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()

  const date = `${year}-${prevMonth}-${day},${year}-${month}-${day}`

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
            <GamesRender title="Trending" games={games} />
          </div>
        )}
      </>
    </div>
  )
}
