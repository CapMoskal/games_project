import {
  clearFiltersType,
  setDateType,
  setGenreType,
  setOrderType,
  setPlatfromType,
} from './filters-types'

export const SET_ORDER = '@@filters/SET_ORDER'
export const SET_DATE = '@@filters/SET_DATE'
export const SET_PLATFORM = '@@filters/SET_PLATFORM'
export const SET_GENRE = '@@filters/SET_GENRE'
export const CLEAR_FILTERS = '@@filters/CLEAR_FILTERS'

export const setOrder = (order: string): setOrderType => ({
  type: SET_ORDER,
  payload: order,
})

export const setDate = (date: string): setDateType => ({
  type: SET_DATE,
  payload: date,
})

export const setPlatform = (
  platform: string | null
): setPlatfromType => ({
  type: SET_PLATFORM,
  payload: platform,
})

export const setGenre = (genre: string | null): setGenreType => ({
  type: SET_GENRE,
  payload: genre,
})

export const clearFilters = (): clearFiltersType => ({
  type: CLEAR_FILTERS,
})
