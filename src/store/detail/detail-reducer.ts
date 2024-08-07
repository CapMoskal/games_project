import { SET_ERROR, SET_GAME, SET_LOADING } from './detail-actions'
import { TDetailActions, TGameDetail } from './detail-types'

interface TInitialState {
  game: TGameDetail
  error: string | null
  status: 'idle' | 'received' | 'rejected' | 'loading'
}

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
      }
    case SET_GAME:
      return {
        ...state,
        status: 'received',
        game: action.payload,
      }
    default:
      return state
  }
}

// details подключен в rootReducer
// добавить возможность открывать страницу со всей информацией
//
