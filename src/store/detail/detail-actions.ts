import { Dispatch } from 'redux'

import { TDetailActions, TGameDetail } from './detail-types'

import { ALL_GAMES_URL, API_KEY } from '../../config'

export const SET_GAME = '@@detail/SET_GAME'
export const SET_LOADING = '@@detail/SET_LOADING'
export const SET_ERROR = '@@detail/SET_ERROR'
export const CLEAR_DETAIL = '@@detail/CLEAR_DETAIL'

export const setLoading = (): TDetailActions => ({
  type: SET_LOADING,
})
export const setError = (err: string): TDetailActions => ({
  type: SET_ERROR,
  payload: err,
})
const setGame = (game: TGameDetail): TDetailActions => ({
  type: SET_GAME,
  payload: game,
})

export const loadGameDetail =
  (id: string | undefined) =>
  async (dispatch: Dispatch<TDetailActions>) => {
    dispatch(setLoading())
    try {
      if (id) {
        const res = await fetch(
          `${ALL_GAMES_URL}/${id}?key=${API_KEY}`
        )

        if (!res.ok) {
          throw new Error(
            'Network response was not ok ' + res.statusText
          )
        }
        const data: TGameDetail = await res.json()
        dispatch(setGame(data))
      }
    } catch (err) {
      dispatch(setError(err.message))
      console.log(err.message)
    }
  }
