import { addGame } from '../../store/my-library/my-library-actions'
import { useAppDispatch } from '../../types'

interface Props {
  id: number
}

export const GameDetailBtns = ({ id }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className="game-page--btns">
      <button
        onClick={() => {
          //dispatch(addGame(id))
        }}
      >
        add to library
      </button>
      <button
        onClick={() => {
          //dispatch(addGame(id))
        }}
      >
        add to wishlist
      </button>
    </div>
  )
}
