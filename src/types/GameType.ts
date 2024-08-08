import { Genre } from './GenreType'
import { ParentPlatformType } from './ParentPlatformsType'
import { Platform } from './PlatformsType'

export interface Game {
  id: number
  name: string
  released: string
  background_image: string
  rating: number
  ratings_count?: number
  genres: Genre[]
  platforms: Platform[]
  metacritic: number
  parent_platforms: ParentPlatformType[]
}
