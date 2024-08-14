import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../store/rootReducer'
import {
  clearGames,
  loadGames,
} from '../store/all-games-list/all-games-actions'
import {
  resetParams,
  setParams,
} from '../store/params/params-actions'

import { useAppDispatch } from '../types'
import { useLocation } from 'react-router-dom'

export const useGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)
  const pageCount = params.page as number
  const location = useLocation()

  useEffect(() => {
    console.log('load games effect runs')
    dispatch(loadGames(params))
  }, [dispatch, params])

  useEffect(() => {
    // для очистки массива игр и параметров запроса
    // при размонтировании страницы
    return () => {
      dispatch(clearGames())
      dispatch(resetParams())
    }
  }, [dispatch, location.pathname])

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
