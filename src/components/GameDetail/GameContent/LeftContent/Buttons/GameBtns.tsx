import { Game } from '../../../../../types'
import { btnsList } from './buttonsList'
import { GameBtn } from './GameBtn'

interface Props {
  game: Game
}

export const GameBtns = ({ game }: Props) => (
  <div className="game-page--btns">
    {btnsList.map((btn) => (
      <GameBtn
        key={btn.title}
        add={btn.add}
        remove={btn.remove}
        isInlist={btn.isInlist}
        game={game}
        title={btn.title}
        icon={btn.icon}
      />
    ))}
  </div>
)
