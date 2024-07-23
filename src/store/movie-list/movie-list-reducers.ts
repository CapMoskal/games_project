import { MovieListState } from '../../types'
import { MovieListActionTypes } from '../../types/movie-list-actions-types'
import {
  SET_MOVIES,
  SET_ERROR,
  SET_LOADING,
} from './movie-list-actions'

const initialState: MovieListState = {
  list: [],
  status: 'idle',
  error: null,
}

export const moviesListReducer = (
  state = initialState,
  action: MovieListActionTypes
): MovieListState => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        list: action.payload,
        status: 'received',
      }
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      }
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      }
    default:
      return state
  }
}
