import { combineReducers } from 'redux'

import { allGamesReducer } from './all-games-list/all-games-reducer'
import { paramsReducer } from './params/params-reducer'
import { filtersReducer } from './filters/filters-reducer'

export const rootReducer = combineReducers({
  params: paramsReducer,
  games: allGamesReducer,
  filters: filtersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
