import { combineReducers } from 'redux'

import { allGamesReducer } from './all-games-list/all-games-reducer'

export const rootReducer = combineReducers({
  games: allGamesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
