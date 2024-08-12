import { GiftOutlined, PlusCircleOutlined } from '@ant-design/icons'

import { isInLibrary } from './isInLibrary'
import { isInWishlist } from './isInWishlist'

import {
  addToLibrary,
  removeFromLibrary,
} from '../../../../../store/my-library/my-library-actions'
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../../../store/wishlist/wishlist-actions'
import {
  TAddGameLibrary,
  TRemoveGameLibrary,
} from '../../../../../store/my-library/my-library-types'
import {
  TAddGameWishlist,
  TRemoveGameWishlist,
} from '../../../../../store/wishlist/wishlist-types'
import { Game } from '../../../../../types'

interface TBtnsList {
  add: (game: Game) => TAddGameLibrary | TAddGameWishlist
  remove: (game: Game) => TRemoveGameLibrary | TRemoveGameWishlist
  isInlist: (game: Game) => boolean
  title: string
  icon: JSX.Element
}

export const btnsList: TBtnsList[] = [
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
