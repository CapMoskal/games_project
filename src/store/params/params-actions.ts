import { QueryParams } from '../../types'

export const SET_PARAMS = '@@params/SET_PARAMS'

export interface SetParamsActionType {
  type: typeof SET_PARAMS
  payload: QueryParams
}

export const setParams = (
  params: QueryParams
): SetParamsActionType => ({
  type: SET_PARAMS,
  payload: params,
})
