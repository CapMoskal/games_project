import { useGamesList } from '../../hooks/useGamesList'
import { useFilterParams } from '../../hooks/useFilterParams'

import { Filters } from '../../components/Filters'
import { Loading } from '../../components/Games/Loading'
import { Games } from '../../components/Games/Games'

export const AllGamesList = () => {
  const { error, status, games, loadMoreGames } = useGamesList()
  useFilterParams()
  console.log(games.length)

  return (
    <div className="games-n-filters">
      <Filters order platforms genre />
      <>
        {status === 'loading' && <Loading />}
        {error && <h1>Error: {error}</h1>}
        {status === 'received' && (
          <>
            <Games title="All Games" games={games} />
            <button
              className="load-more-btn"
              onClick={() => loadMoreGames()}
            >
              Load more
            </button>
          </>
        )}
      </>
    </div>
  )
}
