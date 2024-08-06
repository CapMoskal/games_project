import {
  CLEAR_FILTERS,
  SET_DATE,
  SET_GENRE,
  SET_ORDER,
  SET_PLATFORM,
} from './filters-actions'

export interface setOrderType {
  type: typeof SET_ORDER
  payload: string
}
export interface setDateType {
  type: typeof SET_DATE
  payload: string
}
export interface setPlatfromType {
  type: typeof SET_PLATFORM
  payload: string | null
}
export interface setGenreType {
  type: typeof SET_GENRE
  payload: string | null
}
export interface clearFiltersType {
  type: typeof CLEAR_FILTERS
}

export type FiltersActionsType =
  | setOrderType
  | setDateType
  | setPlatfromType
  | clearFiltersType
  | setGenreType
