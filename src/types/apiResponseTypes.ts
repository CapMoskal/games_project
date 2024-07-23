import { Movie } from './movieTypes'

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_results: number
  total_pages: number
}

export interface MovieListResponse extends PaginatedResponse<Movie> {}
