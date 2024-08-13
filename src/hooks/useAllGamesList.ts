import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../store/rootReducer'
import {
  clearGames,
  loadGames,
} from '../store/all-games-list/all-games-actions'

import { useAppDispatch } from '../types/DispatchType'

export const useGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)

  useEffect(() => {
    dispatch(loadGames(params))

    return () => {
      dispatch(clearGames())
    }
  }, [dispatch, params])

  return { error, status, games }
}
