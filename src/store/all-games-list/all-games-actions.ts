import { Dispatch } from 'redux'
import { Game } from '../../types'
import { AllGamesActionsType } from '../../types'
import { ALL_GAMES_URL, API_KEY } from '../../config'

export const SET_ALL_GAMES = '@@ALL-GAMES/SET_ALL_GAMES'
export const SET_LOADING = '@@ALL-GAMES/SET_LOADING'
export const SET_ERROR = '@@ALL-GAMES/SET_ERROR'

const setError = (err: string): AllGamesActionsType => ({
  type: SET_ERROR,
  payload: err,
})
const setLoading = (): AllGamesActionsType => ({
  type: SET_LOADING,
})
const setAllGames = (data: Game[]): AllGamesActionsType => ({
  type: SET_ALL_GAMES,
  payload: data,
})

export const loadAllGames =
  () => async (dispatch: Dispatch<AllGamesActionsType>) => {
    dispatch(setLoading())

    try {
      const res = await fetch(
        `${ALL_GAMES_URL}?key=${API_KEY}&page=1&page_size=10`
      )

      if (!res.ok) {
        throw new Error(
          'Network response was not ok ' + res.statusText
        )
      }

      const data = await res.json()
      dispatch(setAllGames(data.results))
    } catch (err) {
      dispatch(setError(err.message))
      console.log(err.message)
    }
  }
