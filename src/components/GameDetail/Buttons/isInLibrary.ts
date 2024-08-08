import { useSelector } from 'react-redux'
import { Game } from '../../../types'
import { RootState } from '../../../store/rootReducer'

export const isInLibrary = (gameCheck: Game): boolean => {
  const library = useSelector((state: RootState) => state.library)
  return library.some((game) => game.id === gameCheck.id)
}
