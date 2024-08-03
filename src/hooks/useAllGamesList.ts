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
    // const params = {
    //   key: API_KEY,
    //   page: 1,
    //   // page_size: 10,
    //   // genres: 'adventure',
    //   dates: '2010-01-01,2010-12-31',
    //   ordering: 'raiting',
    // }

    dispatch(loadGames(params))
    console.log('effect runs')
    // dispatch(loadAllGames())
  }, [dispatch, params])

  return { error, status, games }
}
