import { combineReducers } from 'redux'
import { moviesListReducer } from './movie-list/movie-list-reducers'

export const rootReducer = combineReducers({
  movies: moviesListReducer,
})

export type RootState = ReturnType<typeof rootReducer>
