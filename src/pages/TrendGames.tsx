import { useSelector } from 'react-redux'
import { useGamesList } from '../hooks/useAllGamesList'
import { QueryParams, useAppDispatch } from '../types'
import { RootState } from '../store/rootReducer'
import { useEffect } from 'react'
import { API_KEY } from '../config'
import { setParams } from '../store/params/params-actions'
import { Filters } from '../components/Filters'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { GamesRender } from '../components/GamesRender'
import { useFilterParams } from '../hooks/useFilterParams'

export const TrendGames = () => {
  const { error, status, games } = useGamesList()

  const today = new Date()
  const prevWeek = String(today.getDate() - 7).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()

  // разобраться с неделей
  // почему-то считает в минус
  const date = `${year}-${month}-${prevWeek},${year}-${month}-${day}`
  console.log(date)
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
