import { Movie } from './movieTypes'

export interface MovieListState {
  list: Movie[]
  status: 'idle' | 'loading' | 'rejected' | 'received'
  error: string | null
}
