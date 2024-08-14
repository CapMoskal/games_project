import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { RootState } from '../store/rootReducer'
import {
  clearGames,
  loadGames,
} from '../store/all-games-list/all-games-actions'

import { useAppDispatch } from '../types/DispatchType'
import { setParams } from '../store/params/params-actions'

export const useGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)
  const [pageCount, setPageCount] = useState<number>(1)

  useEffect(() => {
    console.log('load games effect runs')
    dispatch(loadGames({ ...params, page: pageCount }))

    return () => {
      dispatch(clearGames())
    }
  }, [dispatch, pageCount, params])

  const loadNextPage = () => {
    setPageCount((prevPage) => prevPage + 1)
    dispatch(setParams({ page: pageCount }))
  }
  const loadPrevPage = () => {
    setPageCount((prevPage) => prevPage - 1)
    dispatch(setParams({ page: pageCount }))
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
