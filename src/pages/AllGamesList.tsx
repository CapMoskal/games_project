import { useGamesList } from '../hooks/useAllGamesList'

import { Filters } from '../components/Filters'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import { GamesRender } from '../components/GamesRender'
import { useFilterParams } from '../hooks/useFilterParams'

export const AllGamesList = () => {
  const { error, status, games } = useGamesList()
  useFilterParams()

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
            <GamesRender title="All Games" games={games} />
          </div>
        )}
      </>
    </div>
  )
}
