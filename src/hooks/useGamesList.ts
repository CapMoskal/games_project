import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../store/rootReducer'
import { loadGames } from '../store/all-games-list/all-games-actions'
import { setParams } from '../store/params/params-actions'

import { useAppDispatch } from '../types'

export const useGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)
  const pageCount = params.page as number

  useEffect(() => {
    console.log('load games effect runs')
    dispatch(loadGames(params))

    // return () => {
    //   dispatch(clearGames())
    //   dispatch(resetParams())
    // }
  }, [dispatch, params])

  const loadNextPage = () => {
    dispatch(setParams({ page: pageCount + 1 }))
  }
  const loadPrevPage = () => {
    dispatch(setParams({ page: pageCount - 1 }))
  }

  return {
    error,
    status,
    games,
    pageCount,
    loadNextPage,
    loadPrevPage,
  }
}
