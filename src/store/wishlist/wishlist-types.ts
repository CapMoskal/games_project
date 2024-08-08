import { Game } from '../../types'
import { ADD_GAME, REMOVE_GAME } from './wishlist-actions'

export interface TAddGameWishlist {
  type: typeof ADD_GAME
  payload: Game
}
export interface TRemoveGameWishlist {
  type: typeof REMOVE_GAME
  payload: Game
}

export type TWishlistActions = TAddGameWishlist | TRemoveGameWishlist
