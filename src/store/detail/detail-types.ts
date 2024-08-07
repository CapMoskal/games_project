import { Platform } from '../../types'
import {
  SET_ERROR,
  SET_GAME,
  SET_LOADING,
  TGameDetail,
} from './detail-actions'

interface TSetGame {
  type: typeof SET_GAME
  payload: TGameDetail
}
interface TsetLoading {
  type: typeof SET_LOADING
}
interface TSetError {
  type: typeof SET_ERROR
  payload: string
}
export type TDetailActions = TSetGame | TSetError | TsetLoading

export interface TGameDetail {
  id: number
  name: string
  name_original: string
  description: string
  metacritic: number
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  playtime: number
  platforms: Platform[]
}
