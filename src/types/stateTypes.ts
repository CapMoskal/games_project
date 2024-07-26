import { Game } from './GameType'

export interface AllGamesListState {
  games: Game[]
  status: 'idle' | 'loading' | 'rejected' | 'received'
  error: string | null
}
