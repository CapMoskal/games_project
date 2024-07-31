export const SET_ORDER = '@@filters/SET_ORDER'
export const SET_DATE = '@@filters/SET_DATE'
export const SET_PLATFORM = '@@filters/SET_PLATFORM'
export const SET_GENRE = '@@filters/SET_GENRE'
export const CLEAR_FILTERS = '@@filters/CLEAR_FILTERS'

interface setOrderType {
  type: typeof SET_ORDER
  payload: string
}
export const setOrder = (order: string): setOrderType => ({
  type: SET_ORDER,
  payload: order,
})

interface setDateType {
  type: typeof SET_DATE
  payload: string
}
export const setDate = (date: string): setDateType => ({
  type: SET_DATE,
  payload: date,
})

interface setPlatfromType {
  type: typeof SET_PLATFORM
  payload: string
}
export const setPlatform = (platform: string): setPlatfromType => ({
  type: SET_PLATFORM,
  payload: platform,
})

interface setGenreType {
  type: typeof SET_GENRE
  payload: string
}
export const setGenre = (genre: string): setGenreType => ({
  type: SET_GENRE,
  payload: genre,
})

interface clearFiltersType {
  type: typeof CLEAR_FILTERS
}
export const clearFilters = (): clearFiltersType => ({
  type: CLEAR_FILTERS,
})

// main type
export type FiltersActionsType =
  | setOrderType
  | setDateType
  | setPlatfromType
  | clearFiltersType
  | setGenreType
