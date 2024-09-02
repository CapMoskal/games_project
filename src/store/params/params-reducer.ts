import { API_KEY } from '../../config'
import { QueryParams } from '../../types'
import {
  RESET_PARAMS,
  SET_PARAMS,
  TParamsActions,
} from './params-actions'

const initialState: QueryParams = {
  key: API_KEY,
  page_size: 20,
}

export const paramsReducer = (
  state = initialState,
  action: TParamsActions
) => {
  switch (action.type) {
    case SET_PARAMS:
      return {
        ...state,
        ...action.payload,
      }
    case RESET_PARAMS:
      return initialState
    default:
      return state
  }
}
