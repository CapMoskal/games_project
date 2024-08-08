import { CheckCircleOutlined, GiftOutlined } from '@ant-design/icons'
import { Game, useAppDispatch } from '../../../types'
import { isInWishlist } from '../../GameDetail/Buttons/isInWishlist'
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../store/wishlist/wishlist-actions'

interface Props {
  game: Game
}

export const WishBtn = ({ game }: Props) => {
  const dispatch = useAppDispatch()
  const isInLib = isInWishlist(game)

  return (
    <>
      {isInLib ? (
        <CheckCircleOutlined
          onClick={() => dispatch(removeFromWishlist(game))}
          className="game-card--btns--item added"
        />
      ) : (
        <GiftOutlined
          onClick={() => {
            dispatch(addToWishlist(game))
          }}
          className="game-card--btns--item"
        />
      )}
    </>
  )
}
