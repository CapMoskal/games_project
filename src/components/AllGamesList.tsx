import { useGamesList } from '../hooks/useAllGamesList'

import { Filters } from './Filters'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import { API_KEY } from '../config'
import { QueryParams, useAppDispatch } from '../types'
import { useEffect } from 'react'
import { setParams } from '../store/params/params-actions'
import { RootState } from '../store/rootReducer'

import { useSelector } from 'react-redux'
import { GamesRender } from './GamesRender'

export const AllGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useGamesList()

  const filters = useSelector((state: RootState) => state.filters)
  console.log(filters.platform)

  useEffect(() => {
    const params: QueryParams = {
      key: API_KEY,
      platforms: filters.platform,
      ordering: filters.order as QueryParams['ordering'],
      genres: filters.genre as QueryParams['genres'],

      // page: 1,
      // page_size: 10,
      // dates: '2017-01-01,2017-12-31',
    }
    dispatch(setParams(params))
  }, [dispatch, filters])

  return (
    <div className="games-n-filters">
      <div className="filters-con">
        <Filters order platforms genre />
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
            <GamesRender games={games} />
          </div>
        )}
      </>
    </div>
  )
}
