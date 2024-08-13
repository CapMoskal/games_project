import { Game } from '../../types'
import {
  TAddGameLibrary,
  TRemoveGameLibrary,
} from './my-library-types'

export const ADD_GAME = '@@library/ADD_GAME'
export const REMOVE_GAME = '@@library/REMOVE_GAME'

export const addToLibrary = (game: Game): TAddGameLibrary => ({
  type: ADD_GAME,
  payload: game,
})

export const removeFromLibrary = (
  game: Game
): TRemoveGameLibrary => ({
  type: REMOVE_GAME,
  payload: game,
})
