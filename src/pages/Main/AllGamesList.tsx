import { useGamesList } from '../../hooks/useGamesList'

import { Filters } from '../../components/Filters'
import { Loading } from '../../components/Games/Loading'
import { Games } from '../../components/Games/Games'
import { PagButtons } from '../../components/Games/pagButtons/PagButtons'

export const AllGamesList = () => {
  const {
    error,
    status,
    games,
    noMoreGames,
    loadNextPage,
    loadPrevPage,
    pageCount,
  } = useGamesList()

  return (
    <div className="games-n-filters">
      <>
        <Filters order platforms genre />
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
