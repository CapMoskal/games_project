import { PROXY_URL, TMBD_API_KEY, TMBD_BASE_URL } from '../../config'

import { Movie } from '../../types'
import { MovieListActionTypes } from '../../types/'

import { Dispatch } from 'redux'

export const SET_MOVIES = '@@movies-list/SET_MOVIES'
export const SET_LOADING = '@@movies-list/SET_LOADING'
export const SET_ERROR = '@@movies-list/SET_ERROR'
export const LOAD_MOVIES = '@@movies-list/LOAD_MOVIES'

const setMovies = (movies: Movie[]): MovieListActionTypes => ({
  type: SET_MOVIES,
  payload: movies,
})

export const setLoading = (): MovieListActionTypes => ({
  type: SET_LOADING,
})

export const setError = (err: string): MovieListActionTypes => ({
  type: SET_ERROR,
  payload: err,
})

export const loadMovies =
  () => async (dispatch: Dispatch<MovieListActionTypes>) => {
    dispatch(setLoading())

    try {
      const url = `${PROXY_URL}${TMBD_BASE_URL}?api_key=${TMBD_API_KEY}`
      // console.log('Fetching movies from URL:', url)

      const res = await fetch(url)
      // console.log('Response status:', res.status)

      if (!res.ok) {
        throw new Error(
          'Network response was not ok' + res.statusText
        )
      }

      const data = await res.json()

      console.log(data)

      dispatch(setMovies(data.results))
    } catch (err) {
      dispatch(setError(err.message))
      console.error(err)
    }
  }
