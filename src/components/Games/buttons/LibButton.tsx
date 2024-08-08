import {
  CheckCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { Game, useAppDispatch } from '../../../types'
import { isInLibrary } from '../../GameDetail/Buttons/isInLibrary'
import {
  addToLibrary,
  removeFromLibrary,
} from '../../../store/my-library/my-library-actions'

interface Props {
  game: Game
}

export const LibButton = ({ game }: Props) => {
  const dispatch = useAppDispatch()
  const isInLib = isInLibrary(game)

  return (
    <>
      {isInLib ? (
        <CheckCircleOutlined
          onClick={() => dispatch(removeFromLibrary(game))}
          className="game-card--btns--item added"
        />
      ) : (
        <PlusCircleOutlined
          onClick={() => {
            dispatch(addToLibrary(game))
          }}
          className="game-card--btns--item"
        />
      )}
    </>
  )
}
