import { useSelector } from 'react-redux'
import { useAppDispatch } from '../types/dispatchType'
import { RootState } from '../store/rootReducer'
import { useEffect } from 'react'
import { loadMovies } from '../store/movie-list/movie-list-actions'

export const useMoviesList = () => {
  const dispatch = useAppDispatch()
  const { error, status, list } = useSelector(
    (state: RootState) => state.movies
  )

  useEffect(() => {
    console.log('effect runs')
    dispatch(loadMovies())
  }, [dispatch])

  return { error, status, list }
}
