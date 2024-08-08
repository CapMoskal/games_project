import { GiftOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Game, useAppDispatch } from '../../../types'
import { GameBtn } from './GameBtn'
import { isInLibrary } from './isInLibrary'
import {
  addToLibrary,
  removeFromLibrary,
} from '../../../store/my-library/my-library-actions'

interface Props {
  game: Game
}

const listOfSetings = [
  {
    add: addToLibrary,
    remove: removeFromLibrary,
    isInlist: isInLibrary,
    title: 'Library',
    icon: <PlusCircleOutlined />,
  },
]

export const GameBtns = ({ game }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className="game-page--btns">
      <GameBtn
        add={addToLibrary}
        remove={removeFromLibrary}
        isInlist={isInLibrary}
        game={game}
        title="Library"
        icon={<PlusCircleOutlined />}
      />

      {/* <GiftOutlined
        onClick={() => {
          //dispatch(addToLibrary(id))
        }}
      >
        add to wishlist
      </GiftOutlined> */}
    </div>
  )
}
