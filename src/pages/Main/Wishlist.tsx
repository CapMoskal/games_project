import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { Games } from '../../components/Games/Games'

export const Wishlist = () => {
  const games = useSelector((state: RootState) => state.wishlist)
  return <Games title="My Library" games={games} />
}
