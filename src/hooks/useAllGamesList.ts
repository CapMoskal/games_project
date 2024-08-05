import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../store/rootReducer'
import { loadGames } from '../store/all-games-list/all-games-actions'

import { useAppDispatch } from '../types/DispatchType'

// import { API_KEY } from '../config'

export const useGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)

  useEffect(() => {
    dispatch(loadGames(params))
    console.log('effect runs')
  }, [dispatch, params])

  return { error, status, games }
}
