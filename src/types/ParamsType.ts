import { GenresType } from './GenreType'

export interface QueryParams {
  key: string
  platforms: string | null
  page?: number
  page_size?: number
  genres?: GenresType
  dates?: string
  ordering:
    | 'name'
    | 'released'
    | 'added'
    | 'created'
    | 'updated'
    | 'raiting'
    | 'metacritic'
}
