import { Game } from '../../types'
import { TAddGame, TRemoveGame } from './my-library-types'

export const ADD_GAME = '@@library/ADD_GAME'
export const REMOVE_GAME = '@@library/REMOVE_GAME'

export const addGame = (game: Game): TAddGame => ({
  type: ADD_GAME,
  payload: game,
})

export const removeGame = (game: Game): TRemoveGame => ({
  type: REMOVE_GAME,
  payload: game,
})
