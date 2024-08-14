import { useGamesList } from '../../hooks/useGamesList'

import { Filters } from '../../components/Filters'
import { useRangeDays } from '../../hooks/useRangeDays'
import { Loading } from '../../components/Games/Loading'
import { Games } from '../../components/Games/Games'
import { PagButtons } from '../../components/Games/pagButtons/PagButtons'

export const LastMonthGames = () => {
  const date = useRangeDays(-30)
  const {
    error,
    status,
    games,
    loadNextPage,
    loadPrevPage,
    pageCount,
  } = useGamesList()

  // при загрузке основной страницы почему-то криво заполняется
  // массив игр для отображения
  // разобраться (как-то)

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
            />
          </>
        )}
      </>
    </div>
  )
}
