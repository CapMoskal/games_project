import { Genre } from '../../types'

interface Props {
  released: string
  genres: Genre[]
}

export const GameCardExtra = ({ released, genres }: Props) => (
  <div className="game-card-extra">
    <div className="game-card-extra--info">
      <h5 className="game-card-extra--info-title">Released:</h5>
      <h5 className="game-card-extra--info-release">{released}</h5>
    </div>
    <ul className="game-card-extra--info">
      <h5 className="game-card-extra--info-title">Genres:</h5>
      <div className="game-card-extra--info-genres">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className="game-card-extra--info-genres--item"
          >
            {genre.name}
          </li>
        ))}
      </div>
    </ul>
  </div>
)
