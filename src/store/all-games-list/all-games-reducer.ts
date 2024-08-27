import { AllGamesActionsType, AllGamesListState } from '../../types'
import {
  CLEAR_GAMES,
  SET_ALL_GAMES,
  SET_ERROR,
  SET_LOADING,
  SET_NO_MORE_GAMES,
} from './all-games-actions'

const initialState: AllGamesListState = {
  games: [],
  status: 'idle',
  error: null,
  noMoreGames: false,
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
        noMoreGames: false,
      }
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      }
    case SET_NO_MORE_GAMES:
      return {
        ...state,
        noMoreGames: true,
      }
    case CLEAR_GAMES:
      return initialState
    default:
      return state
  }
}
