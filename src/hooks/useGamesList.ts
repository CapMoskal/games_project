import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { RootState } from '../store/rootReducer'
import {
  clearGames,
  loadGames,
} from '../store/all-games-list/all-games-actions'

import { useAppDispatch } from '../types/DispatchType'
import { setParams } from '../store/params/params-actions'
import { QueryParams } from '../types'
import { API_KEY } from '../config'

export const useGamesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, games } = useSelector(
    (state: RootState) => state.games
  )
  const params = useSelector((state: RootState) => state.params)
  const [pageCount, setPageCount] = useState<QueryParams['page']>(1)

  const loadMoreGames = () => {
    setPageCount((prevPage) => prevPage + 1)
    const params: QueryParams = {
      key: API_KEY,
      page: pageCount,
      ordering: 'raiting',
    }
    dispatch(setParams(params))
  }

  useEffect(() => {
    dispatch(loadGames(params))

    // return () => {
    //   dispatch(clearGames())
    // }
  }, [dispatch, params])

  return { error, status, games, loadMoreGames }
}

// найти причину, почему в начале загружает два раза первую страницу
// разобраться с пагинацией
