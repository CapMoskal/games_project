import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { Games } from '../../components/Games/Games'

export const Library = () => {
  const games = useSelector((state: RootState) => state.library)
  return <Games title="My Library" games={games} />
}
