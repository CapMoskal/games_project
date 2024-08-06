import { useSelector } from 'react-redux'
import { QueryParams, useAppDispatch } from '../types'
import { RootState } from '../store/rootReducer'
import { useEffect } from 'react'
import { API_KEY } from '../config'
import { setParams } from '../store/params/params-actions'

type Props = {
  genre: QueryParams['genres']
  date: QueryParams['dates']
  platforms: QueryParams['platforms']
  ordering: QueryParams['ordering']
}

// {
//   genre,
//   date,
//   platforms,
//   ordering,
// }: Props
export const useFilterParams = (
  date: QueryParams['dates'] = undefined
) => {
  const dispatch = useAppDispatch()

  const filters = useSelector((state: RootState) => state.filters)

  useEffect(() => {
    const params: QueryParams = {
      key: API_KEY,
      platforms: filters.platform,
      ordering: filters.order as QueryParams['ordering'],
      genres: filters.genre as QueryParams['genres'],
      dates: date,

      // page: 1,
      // page_size: 10,
    }

    dispatch(setParams(params))
  }, [dispatch, filters, date])
}
