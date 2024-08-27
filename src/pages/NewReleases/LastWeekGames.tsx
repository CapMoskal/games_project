import { useGamesList } from '../../hooks/useGamesList'
import { useRangeDays } from '../../hooks/useRangeDays'

import { Filters } from '../../components/Filters'
import { Loading } from '../../components/Games/Loading'
import { Games } from '../../components/Games/Games'
import { PagButtons } from '../../components/Games/pagButtons/PagButtons'

export const LastWeekGames = () => {
  const date = useRangeDays(-7)

  const {
    error,
    status,
    games,
    loadNextPage,
    loadPrevPage,
    pageCount,
    noMoreGames,
  } = useGamesList(date)

  return (
    <div className="games-n-filters">
      <>
        <Filters order platforms />
        {status === 'loading' && <Loading />}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <>
            <Games title="All Games" games={games} />
            <PagButtons
              pageCount={pageCount}
              loadPrevPage={loadPrevPage}
              loadNextPage={loadNextPage}
              noMoreGames={noMoreGames}
            />
          </>
        )}
      </>
    </div>
  )
}
