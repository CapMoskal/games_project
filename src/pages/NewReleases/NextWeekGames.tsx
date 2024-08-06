import { useGamesList } from '../../hooks/useAllGamesList'
import { useRangeDays } from '../../hooks/useRangeDays'
import { useFilterParams } from '../../hooks/useFilterParams'

import { Filters } from '../../components/Filters'
import { Loading } from '../../components/Loading'
import { Games } from '../../components/Games'

export const NextWeekGames = () => {
  const { error, status, games } = useGamesList()
  const date = useRangeDays(7)
  useFilterParams(date)

  return (
    <div className="games-n-filters">
      <Filters order platforms />
      <>
        {status === 'loading' && <Loading />}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <Games title="Next week" games={games} />
        )}
      </>
    </div>
  )
}
