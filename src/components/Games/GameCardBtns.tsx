import {
  CheckCircleOutlined,
  GiftOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'

import {
  addGame,
  removeGame,
} from '../../store/my-library/my-library-actions'

import { Game, useAppDispatch } from '../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'

interface Props {
  game: Game
}

export const GameCardBtns = ({ game }: Props) => {
  const library = useSelector((state: RootState) => state.library)
  const dispatch = useAppDispatch()

  return (
    <div className="game-card--btns">
      {library.includes(game) ? (
        <CheckCircleOutlined
          onClick={() => dispatch(removeGame(game))}
          className="game-card--btns--item added"
        />
      ) : (
        <PlusCircleOutlined
          onClick={() => {
            dispatch(addGame(game))
          }}
          className="game-card--btns--item"
        />
      )}

      {/* сделать то же самое для добавления в вишлист. 
      Возможно поменять значок */}
      {/* взять пример с RAWG */}
      <GiftOutlined className="game-card--btns--item" />
    </div>
  )
}
