import { Game } from '../../types'
import { ADD_GAME, REMOVE_GAME } from './my-library-actions'

export interface TAddGame {
  type: typeof ADD_GAME
  payload: Game
}
export interface TRemoveGame {
  type: typeof REMOVE_GAME
  payload: Game
}

export type TMyLibraryActions = TAddGame | TRemoveGame
