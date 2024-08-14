import { QueryParams } from '../../types'

export const SET_PARAMS = '@@params/SET_PARAMS'
export const RESET_PARAMS = '@@params/RESET_PARAMS'

export interface TSetParams {
  type: typeof SET_PARAMS
  payload: QueryParams
}

export const setParams = (params: QueryParams): TSetParams => ({
  type: SET_PARAMS,
  payload: params,
})

export interface TResetParams {
  type: typeof RESET_PARAMS
}

export const resetParams = () => ({
  type: RESET_PARAMS,
})

export type TParamsActions = TSetParams | TResetParams
