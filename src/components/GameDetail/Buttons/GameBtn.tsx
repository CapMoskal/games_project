import {
  CheckCircleOutlined,
  GiftOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { addToLibrary } from '../../../store/my-library/my-library-actions'
import { Game, useAppDispatch } from '../../../types'
import {
  TAddGameLibrary,
  TRemoveGameLibrary,
} from '../../../store/my-library/my-library-types'

interface Props {
  game: Game
  title: string
  icon: JSX.Element
  isInlist: (game: Game) => boolean
  add: (game: Game) => TAddGameLibrary // | тип добавления в вишлист
  remove: (game: Game) => TRemoveGameLibrary // | тип remove from вишлист
}

const icons = {
  addLibrary: <PlusCircleOutlined />,
  addWishlist: <GiftOutlined />,
  remove: <CheckCircleOutlined />,
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
