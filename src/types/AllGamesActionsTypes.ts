import {
  CLEAR_GAMES,
  SET_ALL_GAMES,
  SET_ERROR,
  SET_LOADING,
} from '../store/all-games-list/all-games-actions'

import { Game } from './GameType'

interface SetAllGamesAction {
  type: typeof SET_ALL_GAMES
  payload: Game[]
}
interface SetLoadingAction {
  type: typeof SET_LOADING
}
interface SetErrorAction {
  type: typeof SET_ERROR
  payload: string
}
interface TClearGames {
  type: typeof CLEAR_GAMES
}

export type AllGamesActionsType =
  | SetAllGamesAction
  | SetLoadingAction
  | SetErrorAction
  | TClearGames
