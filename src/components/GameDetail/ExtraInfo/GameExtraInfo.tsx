import {
  TDevelopers,
  TEsrbRaiting,
  TPublishers,
  TTags,
} from '../../../store/detail/detail-types'
import { Genre, Platform } from '../../../types'

interface Props {
  platforms: Platform[]
  metacritic: number
  genres: Genre[]
  developers: TDevelopers[]
  publichers: TPublishers[]
  esrb_raiting: TEsrbRaiting
  tags: TTags[]
}

export const GameExtraInfo = ({
  platforms,
  metacritic,
  genres,
  developers,
  publichers,
  esrb_raiting,
  tages,
}: Props) => {
    return (
        // сделать вывод компонентов. смотреть пример на ровг
    )
}
