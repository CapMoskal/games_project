import { AllGamesActionsType, AllGamesListState } from '../../types'
import {
  SET_ALL_GAMES,
  SET_ERROR,
  SET_LOADING,
} from './all-games-actions'

const initialState: AllGamesListState = {
  games: [],
  status: 'idle',
  error: null,
}

export const allGamesReducer = (
  state = initialState,
  action: AllGamesActionsType
): AllGamesListState => {
  switch (action.type) {
    case SET_ALL_GAMES:
      return {
        ...state,
        games: action.payload,
        status: 'received',
        error: null,
      }
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: 'loading',
      }
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      }
    default:
      return state
  }
}
