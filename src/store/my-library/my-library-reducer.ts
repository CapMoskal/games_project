import { Game } from '../../types'
import { ADD_GAME, REMOVE_GAME } from './my-library-actions'
import { TMyLibraryActions } from './my-library-types'

interface TLibraryInitState {
  //   filter(arg0: (game: Game) => boolean): unknown
  games: Game[]
}

const initialState: TLibraryInitState = {
  games: [],
  //   filter: function (_arg0: (game: Game) => boolean): unknown {
  //     throw new Error('Function not implemented.')
  //   },
}

export const myLibraryReducer = (
  state = initialState,
  action: TMyLibraryActions
) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      }
    case REMOVE_GAME:
      return state.filter(
        (game: Game) => game.id !== action.payload.id
      )
    default:
      return state
  }
}
