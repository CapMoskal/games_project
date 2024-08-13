import { Game } from '../../types'
import { ADD_GAME, REMOVE_GAME } from './my-library-actions'
import { TMyLibraryActions } from './my-library-types'

const initialState: Game[] = []

export const myLibraryReducer = (
  state = initialState,
  action: TMyLibraryActions
) => {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.payload]
    case REMOVE_GAME:
      return state.filter((game) => game.id !== action.payload.id)
    default:
      return state
  }
}
