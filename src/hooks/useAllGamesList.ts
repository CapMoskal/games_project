import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../store/rootReducer'
import { loadAllGames } from '../store/all-games-list/all-games-actions'
import { useAppDispatch } from '../types/DispatchType'
import { API_KEY } from '../config'
import { QueryParams } from '../types/ParamsType'

type Props = {
  params: QueryParams
}
// { params }: Props
export const useAllGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )

  useEffect(() => {
    const params = {
      key: API_KEY,
      page: 1,
      // page_size: 10,
      genres: 'adventure',
      // dates: '2010-01-01,2010-12-31',
    }

    dispatch(loadAllGames(params))
    // dispatch(loadAllGames())
  }, [dispatch])

  return { error, status, games }
}
