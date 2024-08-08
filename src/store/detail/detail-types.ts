import { Genre, Platform } from '../../types'
import { ParentPlatformType } from '../../types/ParentPlatformsType'
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

export interface TStores {
  id: number
  store: {
    id: number
    name: string
    domain: string
  }
}

export interface TDevelopers {
  id: number
  name: string
}

export interface TTags {
  id: number
  name: string
}

export interface TPublishers {
  id: number
  name: string
}

export interface TEsrbRaiting {
  id: number
  name: string
}

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
  parent_platforms: ParentPlatformType[]
  genres: Genre[]
  stores: TStores[]
  developers: TDevelopers[]
  tags: TTags[]
  publichers: TPublishers[]
  esrb_raiting: TEsrbRaiting
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
