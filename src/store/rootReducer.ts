import { combineReducers } from 'redux'

import { allGamesReducer } from './all-games-list/all-games-reducer'
import { paramsReducer } from './params/params-reducer'
import { myLibraryReducer } from './my-library/my-library-reducer'
import { detailReducer } from './detail/detail-reducer'
import { wishlistReducer } from './wishlist/wishlist-reducer'

export const rootReducer = combineReducers({
  params: paramsReducer,
  games: allGamesReducer,
  library: myLibraryReducer,
  wishlist: wishlistReducer,
  details: detailReducer,
})

export type RootState = ReturnType<typeof rootReducer>
