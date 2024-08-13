import { Game } from '../../../types'

import { LibButton } from './LibButton'
import { WishBtn } from './WishButton'

interface Props {
  game: Game
}

export const GameCardBtns = ({ game }: Props) => {
  return (
    <div className="game-card--btns">
      <LibButton game={game} />
      <WishBtn game={game} />
    </div>
  )
}
