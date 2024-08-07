import { combineReducers } from 'redux'

import { allGamesReducer } from './all-games-list/all-games-reducer'
import { paramsReducer } from './params/params-reducer'
import { filtersReducer } from './filters/filters-reducer'
import { myLibraryReducer } from './my-library/my-library-reducer'
import { detailReducer } from './detail/detail-reducer'

export const rootReducer = combineReducers({
  params: paramsReducer,
  games: allGamesReducer,
  filters: filtersReducer,
  library: myLibraryReducer,
  details: detailReducer,
})

export type RootState = ReturnType<typeof rootReducer>
