import { useSelector } from 'react-redux'
import { Game } from '../../../types'
import { RootState } from '../../../store/rootReducer'

export const isInWishlist = (gameCheck: Game): boolean => {
  const wishlist = useSelector((state: RootState) => state.wishlist)
  return wishlist.some((game) => game.id === gameCheck.id)
}
