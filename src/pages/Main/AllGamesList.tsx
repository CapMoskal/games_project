import { useGamesList } from '../../hooks/useAllGamesList'
import { useFilterParams } from '../../hooks/useFilterParams'

import { Filters } from '../../components/Filters'
import { Loading } from '../../components/Games/Loading'
import { Games } from '../../components/Games/Games'

export const AllGamesList = () => {
  const { error, status, games } = useGamesList()
  useFilterParams()

  return (
    <div className="games-n-filters">
      <Filters order platforms genre />
      <>
        {status === 'loading' && <Loading />}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <Games title="All Games" games={games} />
        )}
      </>
    </div>
  )
}
