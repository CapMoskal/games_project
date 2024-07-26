import { Game } from './GameType'

export interface GamesResponse {
  count: number
  next: string
  previous: string
  results: Game[]
}
