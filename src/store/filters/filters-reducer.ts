import { GenresType } from '../../types'
import {
  CLEAR_FILTERS,
  FiltersActionsType,
  SET_DATE,
  SET_GENRE,
  SET_ORDER,
  SET_PLATFORM,
} from './filters-actions'

interface initialStateType {
  order: string | null
  platform: string | null
  genre: GenresType | null
  date: string | null
}

const initialState: initialStateType = {
  order: 'raiting',
  platform: null,
  genre: null,
  date: null,
}

export const filtersReducer = (
  state = initialState,
  action: FiltersActionsType
) => {
  switch (action.type) {
    case SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      }
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      }
    case SET_PLATFORM:
      return {
        ...state,
        platform: action.payload,
      }
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      }
    case CLEAR_FILTERS:
      return initialState
    default:
      return state
  }
}
