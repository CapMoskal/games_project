import { Game } from './GameType'

export interface GamesList {
  count: number
  next: string
  previous: string
  results: Game[]
}
