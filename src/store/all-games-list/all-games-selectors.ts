import { AllGamesListState } from '../../types'
import { RootState } from '../rootReducer'

export const selectAllGamesListInfo =
  () =>
  (state: RootState): AllGamesListState =>
    state.games
