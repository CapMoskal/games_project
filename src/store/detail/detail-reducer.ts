import {
  CLEAR_DETAIL,
  SET_ERROR,
  SET_ERROR_SCREENSHOTS,
  SET_GAME,
  SET_LOADING,
  SET_SCREENSHOTS,
} from './detail-actions'
import { TDetailActions, TInitialState } from './detail-types'

const initialState: TInitialState = {
  game: {
    id: 0,
    name: '',
    name_original: '',
    description: '',
    metacritic: 0,
    tba: false,
    background_image: '',
    rating: 0,
    rating_top: 0,
    playtime: 0,
    released: '',
    platforms: [],
  },
  screenshots: {
    count: 0,
    results: [],
  },
  error_screenshots: null,
  error: null,
  status: 'idle',
}

export const detailReducer = (
  state = initialState,
  action: TDetailActions
) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        status: 'rejected',
      }
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
        error_screenshots: null,
      }
    case SET_GAME:
      return {
        ...state,
        status: 'received',
        game: action.payload,
      }
    case SET_SCREENSHOTS:
      return {
        ...state,
        screenshots: action.payload,
      }
    case SET_ERROR_SCREENSHOTS:
      return {
        ...state,
        error_screenshots: action.payload,
      }
    case CLEAR_DETAIL:
      return initialState
    default:
      return state
  }
}

// details подключен в rootReducer
// добавить возможность открывать страницу со всей информацией
//
