import { CheckCircleOutlined } from '@ant-design/icons'
import { Game, useAppDispatch } from '../../../../../types'
import {
  TAddGameLibrary,
  TRemoveGameLibrary,
} from '../../../../../store/my-library/my-library-types'
import {
  TAddGameWishlist,
  TRemoveGameWishlist,
} from '../../../../../store/wishlist/wishlist-types'

interface Props {
  game: Game
  title: string
  icon: JSX.Element
  isInlist: (game: Game) => boolean
  add: (game: Game) => TAddGameLibrary | TAddGameWishlist
  remove: (game: Game) => TRemoveGameLibrary | TRemoveGameWishlist
}

export const GameBtn = ({
  game,
  title,
  icon,
  isInlist,
  add,
  remove,
}: Props) => {
  const dispatch = useAppDispatch()
  const isIn = isInlist(game)

  return (
    <div
      className="game-page--btns-btn"
      onClick={() =>
        isIn ? dispatch(remove(game)) : dispatch(add(game))
      }
    >
      <div className="text-con">
        <p className="mini-text">{isIn ? 'Remove from' : 'Add to'}</p>
        <p className="game-page--btns-title">{title}</p>
      </div>
      {isIn ? <CheckCircleOutlined /> : icon}
    </div>
  )
}
