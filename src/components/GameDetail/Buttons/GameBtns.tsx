import { Game, useAppDispatch } from '../../../types'

import { GiftOutlined, PlusCircleOutlined } from '@ant-design/icons'

import { GameBtn } from './GameBtn'
import { isInLibrary } from './isInLibrary'

import {
  addToLibrary,
  removeFromLibrary,
} from '../../../store/my-library/my-library-actions'
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../store/wishlist/wishlist-actions'
import { isInWishlist } from './isInWishlist'
import {
  TAddGameLibrary,
  TRemoveGameLibrary,
} from '../../../store/my-library/my-library-types'
import {
  TAddGameWishlist,
  TRemoveGameWishlist,
} from '../../../store/wishlist/wishlist-types'

interface Props {
  game: Game
}

interface TBtnsList {
  add: (game: Game) => TAddGameLibrary | TAddGameWishlist
  remove: (game: Game) => TRemoveGameLibrary | TRemoveGameWishlist
  isInlist: (game: Game) => boolean
  title: string
  icon: JSX.Element
}

const btnsList: TBtnsList[] = [
  {
    add: addToLibrary,
    remove: removeFromLibrary,
    isInlist: isInLibrary,
    title: 'Library',
    icon: <PlusCircleOutlined />,
  },
  {
    add: addToWishlist,
    remove: removeFromWishlist,
    isInlist: isInWishlist,
    title: 'Wishlist',
    icon: <GiftOutlined />,
  },
]

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
