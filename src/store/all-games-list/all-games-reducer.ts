import { Games } from '../../components/Games/Games'
import { AllGamesActionsType, AllGamesListState } from '../../types'
import {
  CLEAR_GAMES,
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
        games: [...state.games, ...action.payload],
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
    case CLEAR_GAMES:
      return initialState
    default:
      return state
  }
}
