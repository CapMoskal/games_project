import { Game } from '../../types'
import {
  TAddGameWishlist,
  TRemoveGameWishlist,
} from './wishlist-types'

export const ADD_GAME = '@@wishlist/ADD_GAME'
export const REMOVE_GAME = '@@wishlist/REMOVE_GAME'

export const addToWishlist = (game: Game): TAddGameWishlist => ({
  type: ADD_GAME,
  payload: game,
})

export const removeFromWishlist = (
  game: Game
): TRemoveGameWishlist => ({
  type: REMOVE_GAME,
  payload: game,
})
