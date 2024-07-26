import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../store/rootReducer'
import { loadAllGames } from '../store/all-games-list/all-games-actions'
import { useAppDispatch } from '../types/dispatchType'

export const useAllGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )

  useEffect(() => {
    dispatch(loadAllGames())
  }, [dispatch])

  return { error, status, games }
}
