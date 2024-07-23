import {
  LOAD_MOVIES,
  SET_ERROR,
  SET_LOADING,
  SET_MOVIES,
} from '../store/movie-list/movie-list-actions'
import { Movie } from './movieTypes'

export interface setMoviesType {
  type: typeof SET_MOVIES
  payload: Movie[]
}

export interface setLoadingType {
  type: typeof SET_LOADING
}

export interface setErrorType {
  type: typeof SET_ERROR
  payload: string
}

export interface loadMoviesListType {
  type: typeof LOAD_MOVIES
}

export type MovieListActionTypes =
  | setMoviesType
  | setLoadingType
  | setErrorType
  | loadMoviesListType
