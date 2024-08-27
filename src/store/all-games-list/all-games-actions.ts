import { Dispatch } from 'redux'

import { useCreateURL } from '../useCreateURL'

import { Game, GamesResponse } from '../../types'
import { AllGamesActionsType } from '../../types'
import { QueryParams } from '../../types'

import { ALL_GAMES_URL } from '../../config'

export const SET_ALL_GAMES = '@@ALL-GAMES/SET_ALL_GAMES'
export const SET_LOADING = '@@ALL-GAMES/SET_LOADING'
export const SET_ERROR = '@@ALL-GAMES/SET_ERROR'
export const CLEAR_GAMES = '@@ALL-GAMES/CLEAR_GAMES'
export const SET_NO_MORE_GAMES = '@@ALL-GAMES/SET_NO_MORE_GAMES'

export const clearGames = (): AllGamesActionsType => ({
  type: CLEAR_GAMES,
})
export const setNoMoreGames = (): AllGamesActionsType => ({
  type: SET_NO_MORE_GAMES,
})
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

export const loadGames =
  (params: QueryParams) =>
  async (dispatch: Dispatch<AllGamesActionsType>) => {
    dispatch(setLoading())

    if (params.key) {
      try {
        const url = useCreateURL(ALL_GAMES_URL, params)
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error(
            'Network response was not ok ' + res.statusText
          )
        }

        const data: GamesResponse = await res.json()

        if (!data.next) {
          dispatch(setNoMoreGames())
        }

        dispatch(setAllGames(data.results))
      } catch (err) {
        dispatch(setError(err.message))
        console.error(err.message)
      }
    }
  }
