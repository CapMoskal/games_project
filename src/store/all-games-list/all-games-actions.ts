import { Dispatch } from 'redux'
import { Game, GamesResponse } from '../../types'
import { AllGamesActionsType } from '../../types'
import { ALL_GAMES_URL, API_KEY } from '../../config'
import { QueryParams } from '../../types/ParamsType'

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

const createURL = (baseURL: string, params: QueryParams): string => {
  const url = new URL(baseURL)
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  )
  return url.toString()
}

export const loadAllGames =
  (params: QueryParams) =>
  async (dispatch: Dispatch<AllGamesActionsType>) => {
    dispatch(setLoading())

    try {
      const url = createURL(ALL_GAMES_URL, params)
      const res = await fetch(url)
      // const res = await fetch(
      //   `${ALL_GAMES_URL}?key=${API_KEY}&page=1&page_size=10`
      // )

      if (!res.ok) {
        throw new Error(
          'Network response was not ok ' + res.statusText
        )
      }

      const data: GamesResponse = await res.json()
      dispatch(setAllGames(data.results))
    } catch (err) {
      dispatch(setError(err.message))
      console.log(err.message)
    }
  }
