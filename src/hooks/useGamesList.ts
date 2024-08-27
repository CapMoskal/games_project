import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

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

export const useGamesList = (releaseDate: string | null = null) => {
  const dispatch = useAppDispatch()
  const { error, status, games, noMoreGames } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)
  const pageCount = params.page ?? 1
  const location = useLocation()

  const isInitialLoad = useRef(true)

  useEffect(() => {
    if (!params.page) {
      dispatch(setParams({ page: 1 }))
    }

    if (releaseDate) {
      dispatch(setParams({ dates: releaseDate }))
    }
  }, [dispatch, releaseDate, params.page])

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false
    } else {
      dispatch(loadGames(params))
    }
  }, [dispatch, params])

  useEffect(() => {
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
    noMoreGames,
    pageCount,
    loadNextPage,
    loadPrevPage,
  }
}
