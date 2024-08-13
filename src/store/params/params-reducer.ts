// import { API_KEY } from '../../config'
import { API_KEY } from '../../config'
import { QueryParams } from '../../types'
import { SET_PARAMS, SetParamsActionType } from './params-actions'

const initialState: QueryParams = {
  // по идее можно один раз тут указать ключ
  // проверить позже
  key: API_KEY,
  page: 1,
  page_size: 40,
  ordering: 'raiting',
}

export const paramsReducer = (
  state = initialState,
  action: SetParamsActionType
) => {
  switch (action.type) {
    case SET_PARAMS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
