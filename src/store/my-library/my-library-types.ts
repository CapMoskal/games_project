import { Game } from '../../types'
import { ADD_GAME, REMOVE_GAME } from './my-library-actions'

export interface TAddGameLibrary {
  type: typeof ADD_GAME
  payload: Game
}
export interface TRemoveGameLibrary {
  type: typeof REMOVE_GAME
  payload: Game
}

export type TMyLibraryActions = TAddGameLibrary | TRemoveGameLibrary
