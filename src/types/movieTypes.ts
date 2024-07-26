import { Genre } from './GenreType'

export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  genre_ids: number[]
}

export interface MovieDetails extends Movie {
  genres: Genre[]
  runtime: number
  status: string
}
