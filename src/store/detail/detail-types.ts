import { Platform } from '../../types'
import {
  CLEAR_DETAIL,
  SET_ERROR,
  SET_ERROR_SCREENSHOTS,
  SET_GAME,
  SET_LOADING,
  SET_SCREENSHOTS,
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
interface TSetScreenshots {
  type: typeof SET_SCREENSHOTS
  payload: TScreenshotsResponse
}
interface TSetErrorScreenshots {
  type: typeof SET_ERROR_SCREENSHOTS
  payload: string
}
interface TClearDetail {
  type: typeof CLEAR_DETAIL
}
export type TDetailActions =
  | TSetGame
  | TSetError
  | TsetLoading
  | TSetScreenshots
  | TSetErrorScreenshots
  | TClearDetail

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

export interface TScreenshotsResults {
  id: number
  image: string
  width: number
  height: number
}

export interface TScreenshotsResponse {
  count: number
  results: TScreenshotsResults[]
}

export interface TInitialState {
  game: TGameDetail
  screenshots: TScreenshotsResponse
  error_screenshots: string | null
  error: string | null
  status: 'idle' | 'received' | 'rejected' | 'loading'
}
