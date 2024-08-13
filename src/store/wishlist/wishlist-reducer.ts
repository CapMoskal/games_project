import { Game } from '../../types'
import { ADD_GAME, REMOVE_GAME } from './wishlist-actions'
import { TWishlistActions } from './wishlist-types'

const initialState: Game[] = []

export const wishlistReducer = (
  state = initialState,
  action: TWishlistActions
) => {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.payload]
    case REMOVE_GAME:
      return state.filter((game) => game.id !== action.payload.id)
    default:
      return state
  }
}
