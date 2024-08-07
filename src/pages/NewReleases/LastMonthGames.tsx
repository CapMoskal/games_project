import { useGamesList } from '../../hooks/useAllGamesList'
import { useFilterParams } from '../../hooks/useFilterParams'

import { Filters } from '../../components/Filters'
import { useRangeDays } from '../../hooks/useRangeDays'
import { Loading } from '../../components/Games/Loading'
import { Games } from '../../components/Games/Games'

export const LastMonthGames = () => {
  const { error, status, games } = useGamesList()
  const date = useRangeDays(-30)
  useFilterParams(date)

  return (
    <div className="games-n-filters">
      <Filters order platforms />
      <>
        {status === 'loading' && <Loading />}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <Games title="Last Month" games={games} />
        )}
      </>
    </div>
  )
}
