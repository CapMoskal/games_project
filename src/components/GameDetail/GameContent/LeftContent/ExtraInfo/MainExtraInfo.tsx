import {
  TDevelopers,
  TPublishers,
  TTags,
} from '../../../store/detail/detail-types'
import { Genre } from '../../../types'

interface Props {
  render: Genre[] | TDevelopers[] | TPublishers[] | TTags[]
}

export const MainExtraInfo = ({ render }: Props) => {
  return (
    <p className="game-page--extra-text">
      {render?.map((elem) => (
        <span className="extra-info--span" key={elem.id}>
          {elem.name}
        </span>
      ))}
    </p>
  )
}
